// venture-publication.entity.ts
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { PublicationClapData } from "./publication-clap.data";
import { PublicationCommentData } from "./publication-comment.data";
import { VentureDetailData } from "./venture-detail.data";
import { PublicationContentData } from "./publication-content.data";
import { PublicationType } from "../../../domain/publications";

@Entity()
export class VenturePublicationData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column({ type: "enum", enum: PublicationType })
  type: PublicationType;

  @Column()
  clapsCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  detailId: string;

  @ManyToOne(
    () => VentureDetailData,
    (ventureDetail) => ventureDetail.publications
  )
  @JoinColumn({ name: "detailId" })
  detail: VentureDetailData;

  @OneToMany(
    () => PublicationClapData,
    (publicationClap) => publicationClap.venturePublication
  )
  claps: PublicationClapData[];

  @OneToMany(
    () => PublicationCommentData,
    (publicationComment) => publicationComment.venturePublication
  )
  comments: PublicationCommentData[];

  @OneToMany(
    () => PublicationContentData,
    (publicationContent) => publicationContent.venturePublication
  )
  contents: PublicationContentData[];
}
