import { User } from "../auth";
import { UserDetail } from "../user";
import { VenturePublication } from "./publication";

export interface PublicationClap {
  id: number;
  user: UserDetail;
  publication: VenturePublication;
  createdAt: Date;
}
