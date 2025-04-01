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

  @OneToOne(() => EventLocationData, (eventLocation) => eventLocation.event)
  @JoinColumn({ name: "locationId" })
  location: EventLocationData;

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
