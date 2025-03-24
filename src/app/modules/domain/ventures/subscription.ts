import { User } from "../auth";
import { UserDetail } from "../user";
import { VentureDetail } from "./detail";
import { Venture } from "./venture";

export interface VentureSubscription {
  id: string;
  subscriber?: UserDetail;
  venture?: VentureDetail;
  createdAt: Date;
}
