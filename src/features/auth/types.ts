export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

/** Datos del usuario que se guardan en la sesión (nunca la contraseña). */
export type SessionUser = Omit<User, "password">;

export interface LoginFormState {
  error?: string;
  email?: string;
}
