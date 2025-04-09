import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  Point,
  Index,
} from "typeorm";
import { VentureEventData } from "./venture-event.data";

@Entity({ name: "event_location" })
export class EventLocationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("geometry", { spatialFeatureType: "Point", srid: 4326 })
  @Index({ spatial: true })
  public location: Point;

  @Column({ nullable: true })
  description?: string;

  @OneToOne(() => VentureEventData, (ventureEvent) => ventureEvent.location)
  event?: VentureEventData;
}
