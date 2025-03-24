import { ContentType } from "../shared";
import { VenturePublication } from "./publication";

export class PublicationContent {
  id: string;
  type: ContentType;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publication: VenturePublication;
}
