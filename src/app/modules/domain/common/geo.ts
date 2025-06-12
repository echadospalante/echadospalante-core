// export interface Country {
//   id: number;
//   name: string;
//   code: string;
//   currency: Currency;
//   phoneCode: string;
//   flag: string;
// }

import { EventLocation } from "../events";
import { User } from "../user";
import { VentureLocation } from "../ventures/location";

// export interface Currency {
//   id: number;
//   name: string;
//   code: string;
//   symbol: string;
// }

export interface Department {
  id: number;
  name: string;
  municipalities: Municipality[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Municipality {
  id: number;
  name: string;
  department: Department;
  lat: number;
  lng: number;
  ventureLocations: VentureLocation[];
  eventLocations: EventLocation[];
  users: User[];
  createdAt: Date;
  updatedAt: Date;
}
