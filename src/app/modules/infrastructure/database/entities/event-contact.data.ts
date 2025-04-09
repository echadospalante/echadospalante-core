import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { VentureEventData } from "./venture-event.data";

@Entity({ name: "event_contact" })
export class EventContactData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { nullable: true })
  contactPhoneNumber?: number;

  @Column("varchar", { nullable: true })
  contactEmail?: number;

  @OneToOne(() => VentureEventData, (ventureEvent) => ventureEvent.contact)
  event?: VentureEventData;
}
