import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { TagList } from "@/components/ui/TagList";
import { ROUTES } from "@/lib/constants";
import type { Job } from "../types";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link href={ROUTES.jobDetail(job.id)} className="card job-card">
      <div className="job-head">
        <div>
          <h2>{job.title}</h2>
          <p className="company">
            {job.company} · {job.location}
          </p>
        </div>
        <Badge>{job.modality}</Badge>
      </div>
      <p className="desc">{job.description}</p>
      <TagList tags={job.tags} />
      <div className="job-foot">
        <span className="salary">{job.salary}</span>
        <span className="muted">
          {job.type} · {job.posted}
        </span>
        <span className={buttonClasses({ size: "sm" })}>Ver detalle →</span>
      </div>
    </Link>
  );
}
