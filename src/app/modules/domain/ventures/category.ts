import { User } from "../user";
import { Venture } from "./venture";

export interface VentureCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  ventures?: Venture[];
  users?: User[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VentureCategoryStats {
  id: string;
  name: string;
  slug: string;
  venturesCount: number;
}

export type VentureCategoryCreate = Pick<
  VentureCategory,
  "name" | "description"
>;
