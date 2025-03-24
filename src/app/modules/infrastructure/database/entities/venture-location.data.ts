import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  Index,
} from "typeorm";
import { Point } from "geojson";

import { VentureData } from "./venture.data";

@Entity({ name: "venture_location" })
export class VentureLocationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("geometry", { spatialFeatureType: "Point", srid: 4326 })
  @Index({ spatial: true })
  public location: Point;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => VentureData, (venture) => venture.location)
  Venture?: VentureData;
}
