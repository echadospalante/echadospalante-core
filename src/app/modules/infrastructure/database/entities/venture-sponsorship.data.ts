import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserData } from "./user.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_sponsorship" })
export class VentureSponsorshipData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  monthlyAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserData, (user) => user.sponsorships)
  @JoinColumn({ name: "sponsorId" })
  sponsor?: UserData;

  @ManyToOne(() => VentureData, (venture) => venture.sponsorships)
  @JoinColumn({ name: "ventureId" })
  venture?: VentureData;
}
