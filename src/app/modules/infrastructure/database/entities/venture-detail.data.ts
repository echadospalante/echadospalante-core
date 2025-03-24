import {
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { VentureEventData } from "./venture-event.data";
import { VenturePublicationData } from "./venture-publication.data";
import { VentureSponsorshipData } from "./venture-sponsorship.data";
import { VentureSubscriptionData } from "./venture-subscription.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_detail" })
export class VentureDetailData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => VentureData, (venture) => venture.detail)
  venture?: VentureData;

  @OneToMany(
    () => VentureEventData,
    (ventureEvent) => ventureEvent.ventureDetail
  )
  events: VentureEventData[];

  @OneToMany(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.detail
  )
  publications: VenturePublicationData[];

  @OneToMany(
    () => VentureSponsorshipData,
    (ventureSponsorship) => ventureSponsorship.detail
  )
  sponsorships: VentureSponsorshipData[];

  @OneToMany(
    () => VentureSubscriptionData,
    (ventureSubscription) => ventureSubscription.detail
  )
  subscriptions: VentureSubscriptionData[];
}
