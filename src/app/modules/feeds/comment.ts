import { User } from "../auth";
import { VenturePublication } from "./publication";

export interface Comment {
  id: string;
  author: User;
  content: string;
  publication: VenturePublication;
}
