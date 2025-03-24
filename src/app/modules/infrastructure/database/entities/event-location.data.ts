import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { VentureEventData } from "./venture-event.data";

@Entity()
export class EventLocationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float", { nullable: true })
  lat?: number;

  @Column("float", { nullable: true })
  lng?: number;

  @Column({ nullable: true })
  description?: string;

  @OneToOne(() => VentureEventData, (ventureEvent) => ventureEvent.location)
  event?: VentureEventData;
}
