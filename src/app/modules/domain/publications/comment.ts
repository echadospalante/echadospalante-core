import { User } from "../user";
import { VenturePublication } from "./publication";

export interface PublicationComment {
  id: string;
  author: User;
  content: string;
  publication: VenturePublication;
  createdAt: Date;
}

export interface PublicationCommentCreate {
  content: string;
  publicationId: string;
  authorId: string;
}
