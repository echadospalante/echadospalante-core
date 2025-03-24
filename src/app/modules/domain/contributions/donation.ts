import { User } from "../auth";
import { VentureEvent } from "../events/event";
import { UserDetail } from "../user";

export interface EventDonation {
  id: string;
  amount: number;
  currency: string;
  createdAt: Date;
  donor: UserDetail;
  event: VentureEvent;
}
