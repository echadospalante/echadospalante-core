import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { NotificationType } from "../../../domain/notifications";
import { NotificationStatus } from "../../../domain/notifications/notification";
import { UserDetailData } from "./user-detail.data";

@Entity({ name: "notification" })
export class NotificationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ type: "enum", enum: NotificationType })
  type: NotificationType;

  @Column({ type: "enum", enum: NotificationStatus })
  status: NotificationStatus;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userDetailId: string;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.notifications)
  @JoinColumn({ name: "userDetailId" })
  user: UserDetailData;
}
