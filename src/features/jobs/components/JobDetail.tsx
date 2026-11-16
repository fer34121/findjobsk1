import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import type { Job } from "../types";

function DetailSection({ title, items, check = false }: { title: string; items: string[]; check?: boolean }) {
  return (
    <section>
      <h3>{title}</h3>
      <ul className={check ? "bullets check" : "bullets"}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function JobDetail({ job }: { job: Job }) {
  return (
    <Card as="article" className="detail">
      <div className="job-head">
        <div className="company-row">
          <div className="avatar" aria-hidden>
            {job.company.charAt(0)}
          </div>
          <div>
            <h1>{job.title}</h1>
            <p className="company">
              {job.company} · {job.location}
            </p>
          </div>
        </div>
        <Badge>{job.modality}</Badge>
      </div>

      <TagList tags={job.tags} />

      <section>
        <h3>Descripción del puesto</h3>
        <p>{job.description}</p>
      </section>

      <DetailSection title="Responsabilidades" items={job.responsibilities} />
      <DetailSection title="Requisitos" items={job.requirements} />
      <DetailSection title="Beneficios" items={job.benefits} check />

      <section>
        <h3>Sobre {job.company}</h3>
        <p>{job.companyInfo}</p>
      </section>
    </Card>
  );
}
