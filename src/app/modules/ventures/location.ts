// VentureLocation;

import { Venture } from "./venture";

// model VentureLocation {
//   id          String   @id @default(cuid())
//   ventureId   String
//   lat         Float?
//   lng         Float?
//   description String?
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @default(now())  @updatedAt
//   venture     Venture?
// }

export interface VentureLocation {
  id: string;
  lat?: number;
  lng?: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  venture?: Venture;
}
