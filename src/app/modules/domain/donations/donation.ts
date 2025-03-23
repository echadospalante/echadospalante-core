import { User } from "../auth";
import { VentureEvent } from "../feeds/event";
import { UserDetail } from "../user";

export interface EventDonation {
  id: string;
  donor: UserDetail;
  venture: VentureEvent;
  createdAt: Date;
}
