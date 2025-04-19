import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

import { UserData } from "./user.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_subscription" })
@Unique(["subscriberId", "ventureId"])
export class VentureSubscriptionData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserData, (user) => user.subscriptions)
  @JoinColumn({ name: "subscriberId" })
  subscriber?: UserData;

  @ManyToOne(() => VentureData, (venture) => venture.subscriptions)
  @JoinColumn({ name: "ventureId" })
  venture?: VentureData;
}
