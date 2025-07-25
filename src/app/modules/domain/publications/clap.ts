import { User } from "../user";
import { VenturePublication } from "./publication";

export interface PublicationClap {
  id: string;
  user: User;
  publication: VenturePublication;
  createdAt: Date;
}

export interface PublicationClapCreate {
  publicationId: string;
  userId: string;
}
