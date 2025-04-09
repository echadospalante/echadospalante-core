import { VentureEvent } from "./event";

export interface EventContact {
  id: string;
  contactEmail?: number;
  contactPhoneNumber?: number;
  event?: VentureEvent;
}
