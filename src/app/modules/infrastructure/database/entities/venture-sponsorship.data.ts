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

@Entity()
export class VentureSponsorshipData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ventureDetailId: string;

  @Column("float")
  monthlyAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  sponsorDetailId: string;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.sponsorships)
  @JoinColumn({ name: "sponsorDetailId" })
  user: UserDetailData;

  @ManyToOne(
    () => VentureDetailData,
    (ventureDetail) => ventureDetail.sponsorships
  )
  @JoinColumn({ name: "ventureDetailId" })
  detail: VentureDetailData;
}
