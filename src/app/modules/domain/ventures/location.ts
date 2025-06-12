import { Point } from "geojson";

import { Venture } from "./venture";
import { Municipality } from "../common";

export interface VentureLocation {
  id: string;
  location?: Point;
  description?: string;
  municipality: Municipality;
  createdAt: Date;
  updatedAt: Date;
  venture?: Venture;
}
