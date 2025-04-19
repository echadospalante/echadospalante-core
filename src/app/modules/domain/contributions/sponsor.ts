import { User } from "../user";
import { Venture } from "../ventures";

export interface VentureSponsorship {
  id: string;
  sponsor?: User;
  venture?: Venture;
  monthlyAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
