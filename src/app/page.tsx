import { redirect } from "next/navigation";
import { getSession } from "@/features/auth/lib/session";
import { ROUTES } from "@/lib/constants";

export default async function HomePage() {
  const user = await getSession();
  redirect(user ? ROUTES.jobs : ROUTES.login);
}
