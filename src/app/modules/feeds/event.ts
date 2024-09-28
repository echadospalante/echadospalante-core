import { EventDonation } from "../donations";
import { Venture, VentureDetail } from "../ventures";
import { EventCategory } from "./category";
import { EventLocation } from "./location";

export interface VentureEvent {
  id: string;
  title: string;
  description: string;
  coverPhoto: string;
  ventureDetail: VentureDetail;
  location: EventLocation;
  categories: EventCategory[];
  donations: EventDonation[];
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}
