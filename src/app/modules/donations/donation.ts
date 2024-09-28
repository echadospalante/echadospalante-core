import { User } from "../auth";
import { VentureEvent } from "../feeds/event";

export interface EventDonation {
  id: string;
  donor: User;
  venture: VentureEvent;
  createdAt: Date;
}
