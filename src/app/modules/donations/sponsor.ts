import { User } from "../auth";
import { UserDetail } from "../user";
import { Venture } from "../ventures/venture";

export interface VentureSponsorship {
  id: string;
  sponsor: UserDetail;
  venture: Venture;
  monthlyAmount: number;
  createdAt: Date;
}
