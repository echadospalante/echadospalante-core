import { UserDetail } from "../user";
import { VentureCategory } from "./category";
import { VentureContact } from "./contact";
import { VentureDetail } from "./detail";
import { VentureLocation } from "./location";

export interface Venture {
  id: string;
  name: string;
  slug: string;
  coverPhoto: string;
  description: string;
  active: boolean;
  verified: boolean;
  detail?: VentureDetail;
  ownerDetail?: UserDetail;
  categories: VentureCategory[];
  contact?: VentureContact;
  location?: VentureLocation;
  createdAt: Date;
  updatedAt: Date;
}

export interface VentureCreate {
  name: string;
  coverPhoto: string;
  description: string;
  categoriesIds: string[];
  contact?: {
    email?: string;
    phoneNumber?: string;
  };
  location?: {
    lat?: number;
    lng?: number;
    description?: string;
  };
}
