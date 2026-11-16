"use client";

import { useJobFilters } from "../hooks/useJobFilters";
import type { Job } from "../types";
import { JobCard } from "./JobCard";
import { JobFiltersBar } from "./JobFiltersBar";

export function JobList({ jobs }: { jobs: Job[] }) {
  const { filters, filteredJobs, updateFilter } = useJobFilters(jobs);

  return (
    <>
      <JobFiltersBar filters={filters} onChange={updateFilter} />

      <p className="muted">{filteredJobs.length} trabajo(s) encontrado(s)</p>

      {filteredJobs.length > 0 ? (
        <ul className="job-list">
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">No hay trabajos que coincidan con tu búsqueda.</p>
      )}
    </>
  );
}
