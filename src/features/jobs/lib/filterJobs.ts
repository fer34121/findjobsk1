import type { Job, JobFilters } from "../types";

/** Función pura: filtra trabajos por texto y modalidad. */
export function filterJobs(jobs: readonly Job[], { query, modality }: JobFilters): Job[] {
  const q = query.trim().toLowerCase();

  return jobs.filter((job) => {
    const matchesText =
      !q ||
      [job.title, job.company, job.location, ...job.tags].some((field) => field.toLowerCase().includes(q));
    const matchesModality = modality === "Todas" || job.modality === modality;
    return matchesText && matchesModality;
  });
}
