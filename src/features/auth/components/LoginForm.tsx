"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { loginAction } from "../actions";
import type { LoginFormState } from "../types";

const initialState: LoginFormState = { email: "demo@findjob.com" };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <Card className="login-card">
      <form action={formAction} className="login-form">
        <h1 className="logo">
          Find<span>Job</span>
        </h1>
        <p className="muted">Inicia sesión para ver las ofertas de trabajo</p>

        <label>
          Correo electrónico
          <input name="email" type="email" defaultValue={state.email} autoComplete="email" required />
        </label>

        <label>
          Contraseña
          <input name="password" type="password" defaultValue="123456" autoComplete="current-password" required />
        </label>

        {state.error && (
          <p className="error" role="alert">
            {state.error}
          </p>
        )}

        <Button type="submit" block disabled={isPending}>
          {isPending ? "Ingresando..." : "Ingresar"}
        </Button>

        <p className="hint">
          Usuario demo: <b>demo@findjob.com</b> / <b>123456</b>
        </p>
      </form>
    </Card>
  );
}
