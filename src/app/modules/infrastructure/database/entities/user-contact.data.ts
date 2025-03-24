import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { UserData } from "./user.data";

@Entity({ name: "user_contact" })
export class UserContactData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  facebookUrl: string;

  @Column()
  linkedinUrl: string;

  @Column()
  twitterUrl: string;

  @Column()
  instagramUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserData, (user) => user.contact)
  user?: UserData;
}
