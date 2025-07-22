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

import { VentureCategoryData } from "./venture-category.data";
import { VentureContactData } from "./venture-contact.data";
import { VentureEventData } from "./venture-event.data";
import { VentureLocationData } from "./venture-location.data";
import { VenturePublicationData } from "./venture-publication.data";
import { VentureSponsorshipData } from "./venture-sponsorship.data";
import { VentureSubscriptionData } from "./venture-subscription.data";
import { UserData } from "./user.data";

@Entity({ name: "venture" })
export class VentureData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  coverPhoto: string;

  @Column({ default: 0 })
  sponsorshipsCount: number;

  @Column({ default: 0 })
  totalSponsorships: number;

  @Column()
  description: string;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  verified: boolean;

  @Column({ default: 0 })
  subscriptionsCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(
    () => VentureLocationData,
    (ventureLocation) => ventureLocation.Venture,
    { cascade: true, eager: true }
  )
  @JoinColumn({ name: "locationId" })
  location?: VentureLocationData;

  @ManyToOne(() => UserData, (user) => user.ventures)
  @JoinColumn({ name: "ownerId" })
  owner?: UserData;

  @OneToOne(
    () => VentureContactData,
    (ventureContact) => ventureContact.Venture,
    { cascade: true }
  )
  @JoinColumn({ name: "ventureContactId" })
  contact?: VentureContactData;

  @ManyToMany(
    () => VentureCategoryData,
    (ventureCategory) => ventureCategory.ventures,
    { eager: true }
  )
  @JoinTable({
    name: "x_venture_venture_category",
    joinColumn: { name: "ventureId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "categoryId", referencedColumnName: "id" },
  })
  categories: VentureCategoryData[];

  @OneToMany(() => VentureEventData, (ventureEvent) => ventureEvent.venture)
  events: VentureEventData[];

  @OneToMany(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.venture
  )
  publications: VenturePublicationData[];

  @OneToMany(
    () => VentureSponsorshipData,
    (ventureSponsorship) => ventureSponsorship.venture
  )
  sponsorships: VentureSponsorshipData[];

  @OneToMany(
    () => VentureSubscriptionData,
    (ventureSubscription) => ventureSubscription.venture
  )
  subscriptions: VentureSubscriptionData[];
}
