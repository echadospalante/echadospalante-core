import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { ContentType } from "../../../domain/shared";
import { VenturePublicationData } from "./venture-publication.data";

@Entity()
export class PublicationContentData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: ContentType })
  type: ContentType;

  @Column()
  content: string;

  @Column()
  publicationId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.contents
  )
  @JoinColumn({ name: "publicationId" })
  venturePublication: VenturePublicationData;
}
