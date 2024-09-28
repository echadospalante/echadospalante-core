import { Municipality } from "../shared/geo";
import { User } from "./user";

export interface UserDetail {
  gender: "M" | "F" | "O";
  birthDate: Date;
  user: User;
  municipality: Municipality;
  notifications: Notification[];
  ventures: Venture[];
  comments: Comment[];
  preferences: VentureCategory[];
}
