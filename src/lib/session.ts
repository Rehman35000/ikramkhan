import { cookies } from "next/headers";
import { AUTH_TOKEN_NAME, type AuthUser, verifyToken } from "./auth";

export async function getCurrentUser(): Promise<AuthUser | null> {
  const store = await cookies();
  const token = store.get(AUTH_TOKEN_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}
