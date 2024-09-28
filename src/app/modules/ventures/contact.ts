import { Venture } from "./venture";

export interface VentureContact {
  id: string;
  email: string;
  phoneNumber: string;
  venture: Venture;
  createdAt: Date;
  updatedAt: Date;
}
