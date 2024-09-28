import { User } from "../auth";
import { UserDetail } from "../user";
import { VenturePublication } from "./publication";

export interface PublicationComment {
  id: string;
  author: UserDetail;
  content: string;
  publication: VenturePublication;
}
