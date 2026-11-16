"use server";

import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants";
import { createSession, deleteSession } from "./lib/session";
import { validateCredentials } from "./services/auth.service";
import type { LoginFormState } from "./types";

export async function loginAction(_prevState: LoginFormState, formData: FormData): Promise<LoginFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Completa todos los campos", email };
  }

  const user = await validateCredentials(email, password);
  if (!user) {
    return { error: "Correo o contraseña incorrectos", email };
  }

  await createSession(user);
  redirect(ROUTES.jobs);
}

export async function logoutAction(): Promise<void> {
  await deleteSession();
  redirect(ROUTES.login);
}
