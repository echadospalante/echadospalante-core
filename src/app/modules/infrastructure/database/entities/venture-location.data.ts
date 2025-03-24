import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_location" })
export class VentureLocationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float", { nullable: true })
  lat?: number;

  @Column("float", { nullable: true })
  lng?: number;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => VentureData, (venture) => venture.location)
  Venture?: VentureData;
}
