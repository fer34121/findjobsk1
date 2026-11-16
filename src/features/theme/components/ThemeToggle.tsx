"use client";

import { MoonIcon, SunIcon } from "@/components/ui/icons";
import { THEME_COOKIE, THEME_MAX_AGE } from "@/lib/constants";
import { isTheme } from "../lib/isTheme";
import type { Theme } from "../types";

/** Tema visible ahora: el elegido (data-theme) o, si no hay, el del sistema. */
function getCurrentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  if (isTheme(attr)) return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Alterna claro/oscuro. Los íconos se muestran con CSS según el tema activo,
 * así el componente no necesita estado y no hay diferencias de hidratación.
 */
export function ThemeToggle() {
  function toggleTheme() {
    const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=${THEME_MAX_AGE}; samesite=lax`;
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Cambiar entre modo claro y oscuro"
      title="Cambiar tema"
    >
      <SunIcon className="icon-sun" />
      <MoonIcon className="icon-moon" />
    </button>
  );
}
