import { User } from "../auth";
import { Venture } from "./venture";

export interface VentureSubscription {
  id: string;
  subscriber: User;
  venture: Venture;
  createdAt: Date;
}
