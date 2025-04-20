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
  UpdateDateColumn,
} from "typeorm";
import { PublicationClapData } from "./publication-clap.data";
import { PublicationCommentData } from "./publication-comment.data";
import { PublicationContentData } from "./publication-content.data";
import { PublicationType } from "../../../domain/publications";
import { VentureData } from "./venture.data";
import { PublicationCategoryData } from "./publication-category.data";
import { EventCategoryData } from "./event-category.data";

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

  @Column({ type: "enum", enum: PublicationType })
  type: PublicationType;

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
