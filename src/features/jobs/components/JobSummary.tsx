import { Card } from "@/components/ui/Card";
import type { Job } from "../types";
import { ApplyButton } from "./ApplyButton";

export function JobSummary({ job }: { job: Job }) {
  const items: Array<{ label: string; value: string | number; highlight?: boolean }> = [
    { label: "Salario", value: job.salary, highlight: true },
    { label: "Tipo de contrato", value: job.type },
    { label: "Modalidad", value: job.modality },
    { label: "Experiencia", value: job.experience },
    { label: "Vacantes", value: job.vacancies },
    { label: "Publicado", value: job.posted },
  ];

  return (
    <Card className="summary">
      <h3>Resumen</h3>
      <dl className="info">
        {items.map(({ label, value, highlight }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className={highlight ? "salary" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>
      <ApplyButton jobTitle={job.title} />
    </Card>
  );
}
