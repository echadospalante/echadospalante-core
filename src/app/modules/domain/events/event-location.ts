import { Point } from "geojson";

import { VentureEvent } from "./event";
import { Municipality } from "../common";

export interface EventLocation {
  id: string;
  location?: Point;
  municipality: Municipality;
  description?: string;
  event?: VentureEvent;
}
