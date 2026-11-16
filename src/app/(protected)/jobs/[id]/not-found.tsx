import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ROUTES } from "@/lib/constants";

export default function JobNotFound() {
  return (
    <main className="container">
      <Card className="empty">
        <h2>Trabajo no encontrado</h2>
        <p>La oferta que buscas no existe o ya no está disponible.</p>
        <Link href={ROUTES.jobs} className={buttonClasses()}>
          Ver todos los trabajos
        </Link>
      </Card>
    </main>
  );
}
