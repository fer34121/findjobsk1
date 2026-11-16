import { MODALITIES, type JobFilters, type ModalityFilter } from "../types";

interface JobFiltersBarProps {
  filters: JobFilters;
  onChange: <K extends keyof JobFilters>(key: K, value: JobFilters[K]) => void;
}

export function JobFiltersBar({ filters, onChange }: JobFiltersBarProps) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Buscar por puesto, empresa, ciudad o tecnología..."
        value={filters.query}
        onChange={(e) => onChange("query", e.target.value)}
        aria-label="Buscar trabajos"
      />
      <select
        value={filters.modality}
        onChange={(e) => onChange("modality", e.target.value as ModalityFilter)}
        aria-label="Filtrar por modalidad"
      >
        <option value="Todas">Todas</option>
        {MODALITIES.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
}
