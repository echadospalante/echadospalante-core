import { VentureSponsorship } from "../contributions";
import { VentureEvent } from "../events";
import { VenturePublication } from "../publications";
import { User } from "../user";
import { VentureCategory } from "./category";
import { VentureContact } from "./contact";
import { VentureLocation } from "./location";
import { VentureSubscription } from "./subscription";

export interface Venture {
  id: string;
  name: string;
  slug: string;
  coverPhoto: string;
  sponsorshipsCount: number;
  totalSponsorships: number;
  description: string;
  active: boolean;
  verified: boolean;
  owner?: User;
  subscriptionsCount: number;
  categories: VentureCategory[];
  contact?: VentureContact;
  location?: VentureLocation;
  events: VentureEvent[];
  sponsorships: VentureSponsorship[];
  subscriptions: VentureSubscription[];
  publications: VenturePublication[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VentureCreate {
  name: string;
  description: string;
  coverPhoto: string;
  categoriesIds: string[];
  contact?: {
    email?: string;
    phoneNumber?: string;
  };
  location?: {
    municipalityId?: number;
    lat?: number;
    lng?: number;
    description?: string;
  };
}

export interface VentureUpdate {
  coverPhoto: string;
  categoriesIds: string[];
  contact?: {
    email?: string;
    phoneNumber?: string;
  };
  location?: {
    municipalityId?: number;
    lat?: number;
    lng?: number;
    description?: string;
  };
}
