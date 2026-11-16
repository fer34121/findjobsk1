export const MODALITIES = ["Remoto", "Híbrido", "Presencial"] as const;
export type Modality = (typeof MODALITIES)[number];

export type ContractType = "Tiempo completo" | "Medio tiempo" | "Prácticas" | "Freelance";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: ContractType;
  modality: Modality;
  salary: string;
  posted: string;
  experience: string;
  vacancies: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  tags: string[];
  companyInfo: string;
}

export type ModalityFilter = Modality | "Todas";

export interface JobFilters {
  query: string;
  modality: ModalityFilter;
}
