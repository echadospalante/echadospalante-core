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

@Entity({ name: "role" })
export class RoleData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: AppRole, unique: true })
  name: AppRole;

  @Column({ type: "enum", enum: AppRole, unique: true })
  label2: string;

  @Column({ default: "" })
  label: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => UserData, (user) => user.roles, { eager: false })
  users?: UserData[];
}
