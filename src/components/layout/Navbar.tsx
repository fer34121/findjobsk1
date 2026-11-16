import { Logo } from "@/components/ui/Logo";
import { LogoutButton } from "@/features/auth/components/LogoutButton";
import type { SessionUser } from "@/features/auth/types";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { ROUTES } from "@/lib/constants";

export function Navbar({ user }: { user: SessionUser }) {
  return (
    <header className="navbar">
      <Logo href={ROUTES.jobs} />
      <div className="nav-right">
        <span className="muted">Hola, {user.name}</span>
        <ThemeToggle />
        <LogoutButton />
      </div>
    </header>
  );
}
