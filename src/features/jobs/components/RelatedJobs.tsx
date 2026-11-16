import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ROUTES } from "@/lib/constants";
import type { Job } from "../types";

export function RelatedJobs({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0) return null;

  return (
    <Card>
      <h3>Trabajos similares</h3>
      <ul className="related">
        {jobs.map((job) => (
          <li key={job.id}>
            <Link href={ROUTES.jobDetail(job.id)}>
              <strong>{job.title}</strong>
              <span className="muted">
                {job.company} · {job.modality}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
