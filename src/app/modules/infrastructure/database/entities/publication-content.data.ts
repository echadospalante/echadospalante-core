import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { ContentType } from "../../../domain/common";
import { VenturePublicationData } from "./venture-publication.data";

@Entity({ name: "publication_content" })
export class PublicationContentData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: ContentType })
  type: ContentType;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.contents
  )
  @JoinColumn({ name: "publicationId" })
  publication: VenturePublicationData;
}
