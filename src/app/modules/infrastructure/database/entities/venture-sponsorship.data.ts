import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UserDetailData } from "./user-detail.data";
import { VentureDetailData } from "./venture-detail.data";

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

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.sponsorships)
  @JoinColumn({ name: "sponsorDetailId" })
  sponsor?: UserDetailData;

  @ManyToOne(
    () => VentureDetailData,
    (ventureDetail) => ventureDetail.sponsorships
  )
  @JoinColumn({ name: "ventureDetailId" })
  detail?: VentureDetailData;
}
