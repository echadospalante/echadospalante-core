// user-detail.entity.ts

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EventDonationData } from "./event-donation.data";
import { MunicipalityData } from "./municipality.data";
import { NotificationData } from "./notification.data";
import { PublicationClapData } from "./publication-clap.data";
import { PublicationCommentData } from "./publication-comment.data";
import { UserData } from "./user.data";
import { VentureSponsorshipData } from "./venture-sponsorship.data";
import { VentureSubscriptionData } from "./venture-subscription.data";
import { VentureData } from "./venture.data";

@Entity({ name: "user_detail" })
export class UserDetailData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: ["M", "F", "O"] })
  gender: "M" | "F" | "O";

  @Column()
  birthDate: Date;

  @OneToOne(() => UserData, (user) => user.detail)
  user?: UserData;

  @ManyToOne(() => MunicipalityData, (municipality) => municipality.userDetails)
  @JoinColumn({ name: "municipalityId" })
  municipality?: MunicipalityData;

  @OneToMany(
    () => PublicationCommentData,
    (publicationComment) => publicationComment.author
  )
  comments: PublicationCommentData[];

  @OneToMany(() => EventDonationData, (eventDonation) => eventDonation.donor)
  donations: EventDonationData[];

  @OneToMany(() => NotificationData, (notification) => notification.user)
  notifications: NotificationData[];

  @OneToMany(
    () => PublicationClapData,
    (publicationClap) => publicationClap.user
  )
  publicationClaps: PublicationClapData[];

  @OneToMany(
    () => VentureSponsorshipData,
    (ventureSponsorship) => ventureSponsorship.sponsor
  )
  sponsorships: VentureSponsorshipData[];

  @OneToMany(
    () => VentureSubscriptionData,
    (ventureSubscription) => ventureSubscription.subscriber
  )
  subscriptions: VentureSubscriptionData[];

  @OneToMany(() => VentureData, (venture) => venture.ownerDetail)
  ventures: VentureData[];
}
