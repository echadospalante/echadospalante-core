import { User } from "../auth";
import { Venture } from "../ventures/venture";

export interface VentureSponsorship {
  id: string;
  sponsor: User;
  venture: Venture;
  monthlyAmount: number;
  createdAt: Date;
}
