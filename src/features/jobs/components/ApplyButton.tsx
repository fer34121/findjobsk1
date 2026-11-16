"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

// Botón dummy: solo simula la postulación
export function ApplyButton({ jobTitle }: { jobTitle: string }) {
  const [applied, setApplied] = useState(false);

  if (applied) {
    return <p className="success">✔ ¡Postulación enviada a &quot;{jobTitle}&quot;! (simulada)</p>;
  }

  return (
    <Button block onClick={() => setApplied(true)}>
      Postular ahora
    </Button>
  );
}
