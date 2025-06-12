import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  Index,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Point } from "geojson";

import { VentureData } from "./venture.data";
import { MunicipalityData } from "./municipality.data";

@Entity({ name: "venture_location" })
export class VentureLocationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("geometry", { spatialFeatureType: "Point", srid: 4326 })
  @Index({ spatial: true })
  location: Point;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(
    () => MunicipalityData,
    (municipality) => municipality.ventureLocations,
    { eager: true, nullable: false }
  )
  @JoinColumn({ name: "municipalityId" })
  municipality: MunicipalityData;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => VentureData, (venture) => venture.location)
  Venture?: VentureData;
}
