import { VenturePublication } from "./publication";

export interface PublicationCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  publications?: VenturePublication[];
  createdAt: Date;
  updatedAt: Date;
}
