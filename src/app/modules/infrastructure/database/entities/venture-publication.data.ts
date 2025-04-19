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
import { PublicationContentData } from "./publication-content.data";
import { PublicationType } from "../../../domain/publications";
import { VentureData } from "./venture.data";

@Entity({ name: "venture_publication" })
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

  @ManyToOne(() => VentureData, (venture) => venture.publications)
  @JoinColumn({ name: "ventureId" })
  venture: VentureData;

  @OneToMany(
    () => PublicationClapData,
    (publicationClap) => publicationClap.publication
  )
  claps: PublicationClapData[];

  @OneToMany(
    () => PublicationCommentData,
    (publicationComment) => publicationComment.publication
  )
  comments: PublicationCommentData[];

  @OneToMany(
    () => PublicationContentData,
    (publicationContent) => publicationContent.publication
  )
  contents: PublicationContentData[];
}
