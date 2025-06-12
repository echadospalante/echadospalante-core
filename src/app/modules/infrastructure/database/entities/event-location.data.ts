import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  Point,
  Index,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { VentureEventData } from "./venture-event.data";
import { MunicipalityData } from "./municipality.data";

@Entity({ name: "event_location" })
export class EventLocationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("geometry", {
    spatialFeatureType: "Point",
    srid: 4326,
    nullable: true,
  })
  @Index({ spatial: true })
  public location?: Point;

  @ManyToOne(
    () => MunicipalityData,
    (municipality) => municipality.eventLocations,
    { eager: true, nullable: false }
  )
  @JoinColumn({ name: "municipalityId" })
  municipality: MunicipalityData;

  @Column({ nullable: true })
  description?: string;

  @OneToOne(() => VentureEventData, (ventureEvent) => ventureEvent.location)
  event?: VentureEventData;
}
