import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { AppRole } from "../../../domain/user";
import { UserData } from "./user.data";

@Entity()
export class RoleData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: AppRole, unique: true })
  name: AppRole;

  @Column({ default: "" })
  label: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => UserData, (user) => user.roles)
  users: UserData[];
}
