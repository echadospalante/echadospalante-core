import { UserDetail } from "../user";
import { VentureDetail } from "../ventures";

export interface VentureSponsorship {
  id: string;
  sponsor?: UserDetail;
  venture?: VentureDetail;
  monthlyAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
