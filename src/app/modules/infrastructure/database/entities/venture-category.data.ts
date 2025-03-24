// venture-category.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { UserData } from "./user.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_category" })
export class VentureCategoryData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => UserData, (user) => user.preferences)
  users?: UserData[];

  @ManyToMany(() => VentureData, (venture) => venture.categories)
  ventures?: VentureData[];
}
