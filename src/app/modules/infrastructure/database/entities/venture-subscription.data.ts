import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { UserDetailData } from "./user-detail.data";
import { VentureDetailData } from "./venture-detail.data";

@Entity()
export class VentureSubscriptionData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ventureId: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  subscriberDetailId: string;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.subscriptions)
  @JoinColumn({ name: "subscriberDetailId" })
  user: UserDetailData;

  @ManyToOne(
    () => VentureDetailData,
    (ventureDetail) => ventureDetail.subscriptions
  )
  @JoinColumn({ name: "ventureId" })
  detail: VentureDetailData;
}
