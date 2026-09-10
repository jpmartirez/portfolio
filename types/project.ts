export type ProjectCategory =
  | "All"
  | "AI & Machine Learning"
  | "Full-Stack Web"
  | "Civic & HealthTech";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: "AI & Machine Learning" | "Full-Stack Web" | "Civic & HealthTech";
  badge?: string;
  deployUrl?: string;
  githubUrl?: string;
}
