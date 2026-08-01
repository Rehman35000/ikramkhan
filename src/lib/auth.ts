import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const JWT_SECRET = process.env.JWT_SECRET || "iknova-dev-secret-change-me-in-production";
export const AUTH_TOKEN_NAME = process.env.AUTH_TOKEN_NAME || "iknova_token";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

function base64UrlEncode(data: string): string {
  return Buffer.from(data).toString("base64url");
}

function base64UrlDecode(data: string): string {
  return Buffer.from(data, "base64url").toString();
}

export function signToken(payload: AuthUser, expiresInSeconds = 60 * 60 * 24 * 7): string {
  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = base64UrlEncode(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + expiresInSeconds }));
  const signature = createHmac("sha256", JWT_SECRET).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${signature}`;
}

export function verifyToken(token: string): AuthUser | null {
  const [header, body, signature] = token.split(".");
  if (!header || !body || !signature) return null;
  const expected = createHmac("sha256", JWT_SECRET).update(`${header}.${body}`).digest("base64url");
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(signature);
  if (expectedBuf.length !== actualBuf.length || !timingSafeEqual(expectedBuf, actualBuf)) return null;
  try {
    const payload = JSON.parse(base64UrlDecode(body)) as AuthUser & { exp?: number };
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return { id: payload.id, name: payload.name, email: payload.email, role: payload.role };
  } catch {
    return null;
  }
}
