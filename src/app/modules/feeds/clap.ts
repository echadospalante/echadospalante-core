import { User } from "../auth";
import { VenturePublication } from "./publication";

export interface PublicationClap {
  id: number;
  user: User;
  publication: VenturePublication;
  createdAt: Date;
}
