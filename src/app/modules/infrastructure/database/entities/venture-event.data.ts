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

@Entity()
export class VentureEventData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  coverPhoto: string;

  @Column()
  ventureId: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  locationId: string;

  @ManyToOne(() => VentureDetailData, (ventureDetail) => ventureDetail.events)
  @JoinColumn({ name: "ventureId" })
  ventureDetail: VentureDetailData;

  @OneToOne(() => EventLocationData, (eventLocation) => eventLocation.event)
  @JoinColumn({ name: "locationId" })
  location: EventLocationData;

  @OneToMany(() => EventDonationData, (eventDonation) => eventDonation.event)
  donations: EventDonationData[];

  @ManyToMany(
    () => EventCategoryData,
    (eventCategory) => eventCategory.ventureEvent
  )
  EventCategory: EventCategoryData[];
}
