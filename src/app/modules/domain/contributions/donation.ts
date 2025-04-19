import { VentureEvent } from "../events/event";
import { User } from "../user";

export interface EventDonation {
  id: string;
  amount: number;
  currency: string;
  createdAt: Date;
  donor: User;
  event: VentureEvent;
}
