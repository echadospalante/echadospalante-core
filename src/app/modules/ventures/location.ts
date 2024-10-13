import { Venture } from "./venture";

export interface VentureLocation {
  id: string;
  lat?: number;
  lng?: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  venture?: Venture;
}
