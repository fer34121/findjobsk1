import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTheme } from "@/features/theme/lib/theme";
import { APP_NAME } from "@/lib/constants";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: APP_NAME, template: `%s · ${APP_NAME}` },
  description: "Encuentra tu próximo trabajo",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  // El tema se lee en el servidor para pintar la página correcta desde el primer render (sin parpadeo).
  const theme = await getTheme();

  return (
    <html lang="es" data-theme={theme ?? undefined}>
      <body>{children}</body>
    </html>
  );
}
