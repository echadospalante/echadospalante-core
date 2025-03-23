import { VentureCategory } from "../ventures";
import { UserContact } from "./contact";
import { UserDetail } from "./detail";
import { Role } from "./role";

export interface User {
  id: string;
  picture: string;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
  contact?: UserContact;
  detail?: UserDetail;
  verified: boolean;
  onboardingCompleted: boolean;
  roles: Role[];
  preferences: VentureCategory[];
  createdAt: Date;
  updatedAt: Date;
}

export type UserCreate = Pick<
  User,
  "email" | "firstName" | "lastName" | "picture"
>;
