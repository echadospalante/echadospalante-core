import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";

import { VentureDetailData } from "./venture-detail.data";
import { VentureLocationData } from "./venture-location.data";
import { UserDetailData } from "./user-detail.data";
import { VentureContactData } from "./venture-contact.data";
import { VentureCategoryData } from "./venture-category.data";

@Entity({ name: "venture" })
export class VentureData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  coverPhoto: string;

  @Column()
  description: string;

  @Column({ default: true })
  active: boolean;

  @Column({ default: false })
  verified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => VentureDetailData, (ventureDetail) => ventureDetail.venture, {
    cascade: true,
  })
  @JoinColumn({ name: "detailId" })
  detail?: VentureDetailData;

  @OneToOne(
    () => VentureLocationData,
    (ventureLocation) => ventureLocation.Venture,
    { cascade: true, eager: true }
  )
  @JoinColumn({ name: "locationId" })
  location?: VentureLocationData;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.ventures)
  @JoinColumn({ name: "ownerDetailId" })
  ownerDetail?: UserDetailData;

  @OneToOne(
    () => VentureContactData,
    (ventureContact) => ventureContact.Venture,
    { cascade: true }
  )
  @JoinColumn({ name: "ventureContactId" })
  contact?: VentureContactData;

  @ManyToMany(
    () => VentureCategoryData,
    (ventureCategory) => ventureCategory.ventures,
    { eager: true }
  )
  @JoinTable({
    name: "x_venture_venture_category",
    joinColumn: { name: "ventureId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "categoryId", referencedColumnName: "id" },
  })
  categories: VentureCategoryData[];
}
