import { Comment } from "../feeds/comment";
import { Notification } from "../notifications";
import { VentureCategory } from "../ventures";
import { Venture } from "../ventures/venture";
import { UserDetail } from "./detail";
import { Role } from "./role";

export interface User {
  id: string;
  picture: string;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
  roles: Role[];
  detail?: UserDetail;
  verified: boolean;
  onboardingCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserCreate = Pick<
  User,
  "email" | "firstName" | "lastName" | "picture"
>;
