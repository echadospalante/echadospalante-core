import { EventDonation } from "../contributions";
import { Venture } from "../ventures";
import { EventCategory } from "./event-category";
import { EventContact } from "./event-contact";
import { EventLocation } from "./event-location";

export interface VentureEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverPhoto: string;
  venture?: Venture;
  location: EventLocation;
  contact: EventContact;
  categories: EventCategory[];
  donations: EventDonation[];
  datesAndHours: {
    date: string; // Format 'YYYY-MM-DD'
    workingRanges: {
      start: string; // Format 'HH:mm'
      end: string; // Format 'HH:mm'
    }[];
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EventCreate {
  title: string;
  description: string;
  coverPhoto: string;
  categoriesIds: string[];
  contactEmail: string;
  contactPhoneNumber: string;
  municipalityId: number;
  locationLat: string;
  locationLng: string;
  datesAndHours: DatesAndHour[];
  locationDescription: string;
}

export interface DatesAndHour {
  date: string;
  workingRanges: WorkingRange[];
}

export interface WorkingRange {
  start: string;
  end: string;
}

export interface EventUpdate {
  coverPhoto: string;
  location: EventLocation;
  categoriesIds: string[];
  startDate: Date;
  endDate: Date;
}
