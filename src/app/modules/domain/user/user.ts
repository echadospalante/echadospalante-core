import { Municipality } from "../common";
import { EventDonation, VentureSponsorship } from "../contributions";
import { PublicationClap, PublicationComment } from "../publications";
import { Venture, VentureCategory, VentureSubscription } from "../ventures";
import { UserContact } from "./contact";
import { Role } from "./role";

export interface User {
  id: string;
  picture: string;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
  contact?: UserContact;
  verified: boolean;
  onboardingCompleted: boolean;
  roles: Role[];
  preferences: VentureCategory[];
  gender: "M" | "F" | "O";
  birthDate: Date;
  municipality?: Municipality;
  comments: PublicationComment[];
  donations: EventDonation[];
  notifications: Notification[];
  publicationClaps: PublicationClap[];
  sponsorships: VentureSponsorship[];
  subscriptions: VentureSubscription[];
  ventures: Venture[];
  createdAt: Date;
  updatedAt: Date;
}

export type UserCreate = Pick<
  User,
  "email" | "firstName" | "lastName" | "picture"
>;
