import { usersMock } from "../data/users.mock";
import type { SessionUser } from "../types";

/**
 * Valida credenciales contra los usuarios dummy.
 * En un proyecto real aquí iría la llamada a la API / base de datos.
 */
export async function validateCredentials(email: string, password: string): Promise<SessionUser | null> {
  const user = usersMock.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
  );
  if (!user) return null;

  return { id: user.id, name: user.name, email: user.email };
}
