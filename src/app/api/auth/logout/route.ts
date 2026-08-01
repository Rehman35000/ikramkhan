import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_TOKEN_NAME } from "@/lib/auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_TOKEN_NAME);
  return NextResponse.json({ success: true });
}
