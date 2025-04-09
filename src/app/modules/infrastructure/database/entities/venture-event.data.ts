import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { EventLocationData } from "./event-location.data";
import { EventDonationData } from "./event-donation.data";
import { VentureDetailData } from "./venture-detail.data";
import { EventCategoryData } from "./event-category.data";
import { EventContactData } from "./event-contact.data";

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

  @Column({ type: "varchar", unique: true })
  slug: string;

  @ManyToOne(() => VentureDetailData, (ventureDetail) => ventureDetail.events)
  @JoinColumn({ name: "ventureId" })
  ventureDetail?: VentureDetailData;

  @JoinColumn({ name: "locationId" })
  @OneToOne(() => EventLocationData, (eventLocation) => eventLocation.event, {
    cascade: true,
  })
  location: EventLocationData;

  @JoinColumn({ name: "contactId" })
  @OneToOne(() => EventContactData, (eventLocation) => eventLocation.event, {
    cascade: true,
  })
  contact: EventContactData;

  @ManyToMany(() => EventCategoryData, (eventCategory) => eventCategory.events)
  categories: EventCategoryData[];

  @OneToMany(() => EventDonationData, (eventDonation) => eventDonation.event)
  donations: EventDonationData[];

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
