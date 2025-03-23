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

@Entity()
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

  @Column({ unique: true })
  detailId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  locationId: string;

  @Column()
  ownerDetailId: string;

  @Column({ unique: true })
  ventureContactId: string;

  @OneToOne(() => VentureDetailData, (ventureDetail) => ventureDetail.venture)
  @JoinColumn({ name: "detailId" })
  detail: VentureDetailData;

  @OneToOne(
    () => VentureLocationData,
    (ventureLocation) => ventureLocation.Venture
  )
  @JoinColumn({ name: "locationId" })
  location: VentureLocationData;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.ventures)
  @JoinColumn({ name: "ownerDetailId" })
  ownerDetail: UserDetailData;

  @OneToOne(
    () => VentureContactData,
    (ventureContact) => ventureContact.Venture
  )
  @JoinColumn({ name: "ventureContactId" })
  contact: VentureContactData;

  @ManyToMany(
    () => VentureCategoryData,
    (ventureCategory) => ventureCategory.ventures
  )
  @JoinTable({
    name: "x_venture_vencure_category",
    joinColumn: { name: "ventureId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "categoryId", referencedColumnName: "id" },
  })
  categories: VentureCategoryData[];
}
