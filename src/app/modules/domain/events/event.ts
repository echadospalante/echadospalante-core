import { EventDonation } from "../contributions";
import { Venture, VentureDetail } from "../ventures";
import { EventCategory } from "./event-category";
import { EventLocation } from "./event-location";

export interface VentureEvent {
  id: string;
  title: string;
  description: string;
  coverPhoto: string;
  ventureDetail?: VentureDetail;
  location: EventLocation;
  categories: EventCategory[];
  donations: EventDonation[];
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
