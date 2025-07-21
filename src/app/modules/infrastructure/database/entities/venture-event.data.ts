import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { EventCategoryData } from "./event-category.data";
import { EventContactData } from "./event-contact.data";
import { EventDonationData } from "./event-donation.data";
import { EventLocationData } from "./event-location.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_event" })
export class VentureEventData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  coverPhoto: string;

  @Column({ default: 0 })
  donationsCount: number;

  @Column({ default: 0 })
  totalDonations: number;

  @Column({ type: "varchar", unique: true })
  slug: string;

  @ManyToOne(() => VentureData, (venture) => venture.events)
  @JoinColumn({ name: "ventureId" })
  venture?: VentureData;

  @JoinColumn({ name: "locationId" })
  @OneToOne(() => EventLocationData, (eventLocation) => eventLocation.event, {
    cascade: true,
    eager: true,
  })
  location: EventLocationData;

  @JoinColumn({ name: "contactId" })
  @OneToOne(() => EventContactData, (eventLocation) => eventLocation.event, {
    cascade: true,
  })
  contact: EventContactData;

  @ManyToMany(
    () => EventCategoryData,
    (eventCategory) => eventCategory.events,
    { eager: true }
  )
  categories: EventCategoryData[];

  @OneToMany(() => EventDonationData, (eventDonation) => eventDonation.event)
  donations: EventDonationData[];

  @Column("jsonb", { nullable: true })
  datesAndHours: {
    date: string; // Format 'YYYY-MM-DD'
    workingRanges: {
      start: string; // Format 'HH:mm'
      end: string; // Format 'HH:mm'
    }[];
  }[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
