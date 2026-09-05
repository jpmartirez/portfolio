export type CertificationCategory =
  | "All"
  | "Hackathons"
  | "Competitions"
  | "Courses & Summits";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  fileType: "image" | "pdf";
  filePath: string;
  thumbnailPath: string;
  category: "Hackathons" | "Competitions" | "Courses & Summits";
  credentialId?: string;
  verifyUrl?: string;
  locationOrEvent?: string;
}
