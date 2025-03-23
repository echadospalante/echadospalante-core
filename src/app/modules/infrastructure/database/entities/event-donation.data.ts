// event-donation.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserDetailData } from "./user-detail.data";
import { VentureEventData } from "./venture-event.data";

@Entity()
export class EventDonationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  eventId: string;

  @Column("float")
  amount: number;

  @Column()
  currency: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  donorDetailId: string;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.donations)
  @JoinColumn({ name: "donorDetailId" })
  donor: UserDetailData;

  @ManyToOne(() => VentureEventData, (ventureEvent) => ventureEvent.donations)
  @JoinColumn({ name: "eventId" })
  event: VentureEventData;
}
