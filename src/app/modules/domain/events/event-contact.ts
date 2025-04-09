import { VentureEvent } from "./event";

export interface EventContact {
  id: string;
  contactEmail?: string;
  contactPhoneNumber?: string;
  event?: VentureEvent;
}
