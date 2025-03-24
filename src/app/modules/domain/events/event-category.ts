import { VentureEvent } from "./event";

export interface EventCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  events: VentureEvent[];
  createdAt: Date;
  updatedAt: Date;
}
