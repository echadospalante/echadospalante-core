import { ContentType } from "../common";
import { Venture } from "../ventures/venture";
import { PublicationCategory } from "./category";
import { PublicationClap } from "./clap";
import { PublicationComment } from "./comment";

export interface VenturePublication {
  id: string;
  description: string;
  active: boolean;
  venture?: Venture;
  clapsCount: number;
  type: PublicationType;
  claps: PublicationClap[];
  comments: PublicationComment[];
  contents: PublicationContent[];
  categories: PublicationCategory[];
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

export interface PublicationCreate {
  description: string;
  type: PublicationType;
  contents: PublicationContent[];
}
