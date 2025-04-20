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

  @CreateDateColumn()
  createdAt: Date;
}
