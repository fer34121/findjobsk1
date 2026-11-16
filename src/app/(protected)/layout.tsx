import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { getSession } from "@/features/auth/lib/session";
import { ROUTES } from "@/lib/constants";

/** Layout de las rutas privadas: valida la sesión y muestra la barra superior. */
export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const user = await getSession();
  if (!user) redirect(ROUTES.login);

  return (
    <>
      <Navbar user={user} />
      {children}
    </>
  );
}
