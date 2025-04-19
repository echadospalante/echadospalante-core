import { User } from "../user";
import { Venture } from "./venture";

export interface VentureSubscription {
  id: string;
  subscriber?: User;
  venture?: Venture;
  createdAt: Date;
}
