import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { EventDonationData } from "./event-donation.data";
import { MunicipalityData } from "./municipality.data";
import { NotificationData } from "./notification.data";
import { PublicationClapData } from "./publication-clap.data";
import { PublicationCommentData } from "./publication-comment.data";
import { RoleData } from "./role.data";
import { UserContactData } from "./user-contact.data";
import { VentureCategoryData } from "./venture-category.data";
import { VentureSponsorshipData } from "./venture-sponsorship.data";
import { VentureSubscriptionData } from "./venture-subscription.data";
import { VentureData } from "./venture.data";

@Entity({ name: "user" })
export class UserData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  picture: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  onboardingCompleted: boolean;

  @Column({ default: false })
  verified: boolean;

  @OneToOne(() => UserContactData, (contact) => contact.user, {
    nullable: true,
    eager: false,
  })
  @JoinColumn({ name: "contactId" })
  contact?: UserContactData;

  @ManyToMany(() => VentureCategoryData, (vc) => vc.users)
  @JoinTable({ name: "x_user_preference" })
  preferences: VentureCategoryData[];

  @ManyToMany(() => RoleData, (role) => role.users, { eager: true })
  @JoinTable({ name: "x_user_role" })
  roles: RoleData[];

  @Column({ type: "enum", enum: ["M", "F", "O"], nullable: true })
  gender?: "M" | "F" | "O";

  @Column({ nullable: true })
  birthDate?: Date;

  @ManyToOne(() => MunicipalityData, (municipality) => municipality.users, {
    nullable: true,
  })
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

  @OneToMany(() => VentureData, (venture) => venture.owner)
  ventures: VentureData[];
}
