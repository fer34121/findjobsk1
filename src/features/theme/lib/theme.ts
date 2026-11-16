import { cookies } from "next/headers";
import { THEME_COOKIE } from "@/lib/constants";
import type { Theme } from "../types";
import { isTheme } from "./isTheme";

/**
 * Tema guardado por el usuario, o null si nunca eligió uno
 * (en ese caso el CSS sigue la preferencia del sistema operativo).
 */
export async function getTheme(): Promise<Theme | null> {
  const value = (await cookies()).get(THEME_COOKIE)?.value;
  return isTheme(value) ? value : null;
}
