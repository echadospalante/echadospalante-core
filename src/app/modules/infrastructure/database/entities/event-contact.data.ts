import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { VentureEventData } from "./venture-event.data";

@Entity({ name: "event_contact" })
export class EventContactData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { nullable: true })
  phoneNumber?: string;

  @Column("varchar", { nullable: true })
  email?: string;

  @OneToOne(() => VentureEventData, (ventureEvent) => ventureEvent.contact)
  event?: VentureEventData;
}
