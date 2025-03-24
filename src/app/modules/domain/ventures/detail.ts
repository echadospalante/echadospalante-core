import { VentureSponsorship } from "../contributions/sponsor";
import { VentureEvent } from "../events/event";
import { VenturePublication } from "../publications/publication";
import { VentureSubscription } from "./subscription";
import { Venture } from "./venture";

export interface VentureDetail {
  id: string;
  venture?: Venture;
  events: VentureEvent[];
  sponsorships: VentureSponsorship[];
  subscriptions: VentureSubscription[];
  publications: VenturePublication[];
}
