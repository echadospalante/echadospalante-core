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

@Entity()
export class UserDetailData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: ["M", "F", "O"] })
  gender: "M" | "F" | "O";

  @Column()
  birthDate: Date;

  @Column()
  municipalityId: number;

  @OneToOne(() => UserData, (user) => user.detail)
  user?: UserData;

  @ManyToOne(() => MunicipalityData, (municipality) => municipality.userDetails)
  @JoinColumn({ name: "municipalityId" })
  municipality?: MunicipalityData;

  @OneToMany(
    () => PublicationCommentData,
    (publicationComment) => publicationComment.User
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
    (ventureSponsorship) => ventureSponsorship.user
  )
  sponsorships: VentureSponsorshipData[];

  @OneToMany(
    () => VentureSubscriptionData,
    (ventureSubscription) => ventureSubscription.user
  )
  subscriptions: VentureSubscriptionData[];

  @OneToMany(() => VentureData, (venture) => venture.ownerDetail)
  ventures: VentureData[];
}
