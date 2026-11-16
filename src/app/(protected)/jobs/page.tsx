import type { Metadata } from "next";
import { JobList } from "@/features/jobs/components/JobList";
import { getJobs } from "@/features/jobs/services/jobs.service";

export const metadata: Metadata = { title: "Ofertas de trabajo" };

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="container">
      <h1>Ofertas de trabajo</h1>
      <JobList jobs={jobs} />
    </main>
  );
}
