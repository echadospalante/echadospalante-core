import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { RoleData } from "./role.data";
import { UserContactData } from "./user-contact.data";
import { UserDetailData } from "./user-detail.data";
import { VentureCategoryData } from "./venture-category.data";

@Entity()
export class UserData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  picture: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  onboardingCompleted: boolean;

  @Column({ default: false })
  verified: boolean;

  @OneToOne(() => UserContactData, (contact) => contact.user)
  @JoinColumn({ name: "contactId" })
  contact?: UserContactData;

  @OneToOne(() => UserDetailData, (detail) => detail.user)
  @JoinColumn({ name: "detailId" })
  detail?: UserDetailData;

  @ManyToMany(() => VentureCategoryData, (vc) => vc.users)
  @JoinTable({ name: "XUserPreferences" })
  preferences: VentureCategoryData[];

  @ManyToMany(() => RoleData, (role) => role.users, { eager: true })
  @JoinTable({ name: "XUserRoles" })
  roles: RoleData[];
}
