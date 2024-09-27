import { User } from "../auth";
import { Venture } from "./venture";

export interface VentureCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  ventures: Venture[];
  users: User[]; // Se agrega para relación inversa de usuarios con preferencias
}
