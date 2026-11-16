import { Button } from "@/components/ui/Button";
import { logoutAction } from "../actions";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <Button type="submit" variant="outline">
        Cerrar sesión
      </Button>
    </form>
  );
}
