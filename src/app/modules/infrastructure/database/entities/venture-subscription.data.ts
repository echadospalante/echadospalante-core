import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserData } from "./user.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_subscription" })
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
