// event-donation.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { VentureEventData } from "./venture-event.data";
import { UserData } from "./user.data";

@Entity({ name: "event_donation" })
export class EventDonationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  currency: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserData, (user) => user.donations)
  @JoinColumn({ name: "donorId" })
  donor: UserData;

  @ManyToOne(() => VentureEventData, (ventureEvent) => ventureEvent.donations)
  @JoinColumn({ name: "eventId" })
  event: VentureEventData;
}
