import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";

export const metadata: Metadata = { title: "Iniciar sesión" };

export default function LoginPage() {
  return (
    <main className="login-wrapper">
      <div className="login-topbar">
        <ThemeToggle />
      </div>
      <LoginForm />
    </main>
  );
}
