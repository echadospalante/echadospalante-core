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

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.subscriptions)
  @JoinColumn({ name: "subscriberDetailId" })
  subscriber?: UserDetailData;

  @ManyToOne(
    () => VentureDetailData,
    (ventureDetail) => ventureDetail.subscriptions
  )
  @JoinColumn({ name: "ventureId" })
  detail?: VentureDetailData;
}
