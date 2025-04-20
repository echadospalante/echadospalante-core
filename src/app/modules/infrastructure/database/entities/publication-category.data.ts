// event-category.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { VentureEventData } from "./venture-event.data";
import { VenturePublicationData } from "./venture-publication.data";

@Entity({
  name: "publication_category",
})
export class PublicationCategoryData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => VentureEventData, (ventureEvent) => ventureEvent.categories)
  @JoinTable({
    name: "x_publication_publication_category",
    joinColumn: { name: "categoryId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "publicationId", referencedColumnName: "id" },
  })
  publications: VenturePublicationData[];
}
