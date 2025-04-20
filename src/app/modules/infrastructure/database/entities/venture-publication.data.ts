// venture-publication.entity.ts
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PublicationType } from "../../../domain/publications";
import { PublicationCategoryData } from "./publication-category.data";
import { PublicationClapData } from "./publication-clap.data";
import { PublicationCommentData } from "./publication-comment.data";
import { PublicationContentData } from "./publication-content.data";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_publication" })
export class VenturePublicationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column({ default: true })
  active: boolean;

  @ManyToOne(() => VentureData, (venture) => venture.publications)
  @JoinColumn({ name: "ventureId" })
  venture?: VentureData;

  @Column()
  clapsCount: number;

  @OneToMany(
    () => PublicationClapData,
    (publicationClap) => publicationClap.publication,
    { eager: true, cascade: true }
  )
  claps: PublicationClapData[];

  @OneToMany(
    () => PublicationCommentData,
    (publicationComment) => publicationComment.publication,
    { eager: true, cascade: true }
  )
  comments: PublicationCommentData[];

  @OneToMany(
    () => PublicationContentData,
    (publicationContent) => publicationContent.publication,
    { eager: true, cascade: true }
  )
  contents: PublicationContentData[];

  @ManyToMany(
    () => PublicationCategoryData,
    (publicationCategory) => publicationCategory.publications,
    { eager: true }
  )
  categories: PublicationCategoryData[];

  @CreateDateColumn()
  createdAt: Date;
}
