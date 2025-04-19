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
import { UserData } from "./user.data";

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

  @ManyToOne(() => UserData, (user) => user.notifications)
  @JoinColumn({ name: "userId" })
  user: UserData;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
