import { User } from "../auth";
import { Venture } from "./venture";

export interface VentureCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  ventures: Venture[];
  users: User[];
}

export type VentureCategoryCreate = Pick<
  VentureCategory,
  "name" | "description"
>;
