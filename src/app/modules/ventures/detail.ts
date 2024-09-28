import { VentureSponsorship } from "../donations/sponsor";
import { VentureEvent } from "../feeds/event";
import { Publication as VenturePublication } from "../feeds/publication";
import { Subscription as VentureSubscription } from "./subscription";
import { Venture } from "./venture";

export interface VentureDetail {
  id: string;
  venture: Venture;
  events: VentureEvent[];
  sponsorships: VentureSponsorship[];
  subscriptions: VentureSubscription[];
  publications: VenturePublication[];
}
