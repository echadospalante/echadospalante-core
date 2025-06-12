// export interface Country {
//   id: number;
//   name: string;
//   code: string;
//   currency: Currency;
//   phoneCode: string;
//   flag: string;
// }

import { User } from "../user";

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
  users: User[];
  createdAt: Date;
  updatedAt: Date;
}
