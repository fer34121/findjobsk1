import { jobsMock } from "../data/jobs.mock";
import type { Job } from "../types";

/*
 * Capa de acceso a datos de trabajos.
 * Hoy devuelve datos dummy; para conectar una API real solo se cambia este archivo.
 */

export async function getJobs(): Promise<Job[]> {
  return jobsMock;
}

export async function getJobById(id: number): Promise<Job | null> {
  return jobsMock.find((job) => job.id === id) ?? null;
}

/** Trabajos similares: comparten modalidad o alguna tecnología. */
export async function getRelatedJobs(job: Job, limit = 3): Promise<Job[]> {
  return jobsMock
    .filter((j) => j.id !== job.id)
    .filter((j) => j.modality === job.modality || j.tags.some((t) => job.tags.includes(t)))
    .slice(0, limit);
}
