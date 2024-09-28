import { EventDonation, VentureSponsorship } from "../donations";
import { PublicationClap, PublicationComment } from "../feeds";
// import { NewsClap } from "../news";
import { Municipality } from "../shared/geo";
import { Venture, VentureCategory, VentureSubscription } from "../ventures";
import { User } from "./user";
import { Notification } from "../notifications";

export interface UserDetail {
  id: string;
  gender: "M" | "F" | "O";
  birthDate: Date;
  user: User;
  municipality: Municipality;
  comments: PublicationComment[];
  donations: EventDonation[];
  notifications: Notification[];
  publicationClaps: PublicationClap[];
  sponsorships: VentureSponsorship[];
  // newsClaps: NewsClap[];
  subscriptions: VentureSubscription[];
  ventures: Venture[];
}
