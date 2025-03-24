import { Point } from "geojson";

import { Venture } from "./venture";

export interface VentureLocation {
  id: string;
  location?: Point;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  venture?: Venture;
}
