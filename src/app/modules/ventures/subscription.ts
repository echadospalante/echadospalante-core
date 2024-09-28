import { User } from "../auth";
import { UserDetail } from "../user";
import { Venture } from "./venture";

export interface VentureSubscription {
  id: string;
  subscriber: UserDetail;
  venture: Venture;
  createdAt: Date;
}
