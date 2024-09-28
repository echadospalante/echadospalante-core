import { Venture } from "../ventures";
import { VentureEvent } from "./event";

export interface EventLocation {
  id: string;
  lat?: number;
  lng?: number;
  description?: string;
  event: VentureEvent;
}
