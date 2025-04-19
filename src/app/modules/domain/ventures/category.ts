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

export type VentureCategoryCreate = Pick<
  VentureCategory,
  "name" | "description"
>;
