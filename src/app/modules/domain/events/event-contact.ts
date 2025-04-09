import { VentureEvent } from "./event";

/**
  Esta berrionda interface nos ha generado problemas
*/
export interface EventContact {
  id: string;
  contactEmail?: string;
  contactPhoneNumber?: string;
  event?: VentureEvent;
}
