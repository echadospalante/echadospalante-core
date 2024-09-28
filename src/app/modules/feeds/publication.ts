import { ContentType } from "../shared";
import { Venture } from "../ventures/venture";
import { PublicationClap } from "./clap";
import { PublicationComment } from "./comment";

export interface VenturePublication {
  id: string;
  description: string;
  venture: Venture;
  type: PublicationType;
  claps: PublicationClap[];
  comments: PublicationComment[];
  body: PublicationContent[];
  createdAt: Date;
}

export enum PublicationType {
  STANDARD = "STANDARD",
  ANNOUNCEMENT = "ANNOUNCEMENT",
  ACHIEVEMENT = "ACHIEVEMENT",
  PROMOTION = "PROMOTION",
  BEHIND_THE_SCENES = "BEHIND_THE_SCENES",
}

export interface PublicationContent {
  id: string;
  type: ContentType;
  content: string; // JSON string
}
