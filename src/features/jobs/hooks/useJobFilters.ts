"use client";

import { useMemo, useState } from "react";
import { filterJobs } from "../lib/filterJobs";
import type { Job, JobFilters } from "../types";

const DEFAULT_FILTERS: JobFilters = { query: "", modality: "Todas" };

export function useJobFilters(jobs: readonly Job[]) {
  const [filters, setFilters] = useState<JobFilters>(DEFAULT_FILTERS);

  const filteredJobs = useMemo(() => filterJobs(jobs, filters), [jobs, filters]);

  function updateFilter<K extends keyof JobFilters>(key: K, value: JobFilters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  return { filters, filteredJobs, updateFilter };
}
