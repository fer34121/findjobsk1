import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="container">
      <Card className="empty">
        <h2>Página no encontrada</h2>
        <p>La página que buscas no existe.</p>
        <Link href={ROUTES.home} className={buttonClasses()}>
          Ir al inicio
        </Link>
      </Card>
    </main>
  );
}
