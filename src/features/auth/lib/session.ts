import { cookies } from "next/headers";
import { SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/constants";
import type { SessionUser } from "../types";

function isSessionUser(value: unknown): value is SessionUser {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.id === "number" && typeof v.name === "string" && typeof v.email === "string";
}

function encode(user: SessionUser): string {
  return Buffer.from(JSON.stringify(user)).toString("base64url");
}

function decode(raw: string): SessionUser | null {
  try {
    const parsed: unknown = JSON.parse(Buffer.from(raw, "base64url").toString("utf8"));
    return isSessionUser(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** Devuelve el usuario de la sesión actual o null. */
export async function getSession(): Promise<SessionUser | null> {
  const raw = (await cookies()).get(SESSION_COOKIE)?.value;
  return raw ? decode(raw) : null;
}

export async function createSession(user: SessionUser): Promise<void> {
  (await cookies()).set(SESSION_COOKIE, encode(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function deleteSession(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
}
