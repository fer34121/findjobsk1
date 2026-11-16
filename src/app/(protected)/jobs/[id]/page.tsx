import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JobDetail } from "@/features/jobs/components/JobDetail";
import { JobSummary } from "@/features/jobs/components/JobSummary";
import { RelatedJobs } from "@/features/jobs/components/RelatedJobs";
import { getJobById, getRelatedJobs } from "@/features/jobs/services/jobs.service";
import { ROUTES } from "@/lib/constants";

interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

async function findJob(params: JobDetailPageProps["params"]) {
  const { id } = await params;
  const jobId = Number(id);
  return Number.isInteger(jobId) ? getJobById(jobId) : null;
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = await findJob(params);
  return { title: job ? job.title : "Trabajo no encontrado" };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await findJob(params);
  if (!job) notFound();

  const related = await getRelatedJobs(job);

  return (
    <main className="container wide">
      <Link href={ROUTES.jobs} className="back">
        ← Volver a la lista
      </Link>

      <div className="detail-layout">
        <JobDetail job={job} />
        <aside className="sidebar">
          <JobSummary job={job} />
          <RelatedJobs jobs={related} />
        </aside>
      </div>
    </main>
  );
}
