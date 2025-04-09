import { VentureEvent } from "./event";

export interface EventContact {
  id: string;
  email?: string;
  phoneNumber?: string;
  event?: VentureEvent;
}
