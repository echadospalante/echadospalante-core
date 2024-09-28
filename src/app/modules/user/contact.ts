import { User } from "./user";

export interface UserContact {
  id: string;
  phoneNumber: string;
  address: string;
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  user: User;
  updatedAt: Date;
}
