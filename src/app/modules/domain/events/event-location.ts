import { Point } from "geojson";

import { VentureEvent } from "./event";

export interface EventLocation {
  id: string;
  location?: Point;
  description?: string;
  event?: VentureEvent;
}
