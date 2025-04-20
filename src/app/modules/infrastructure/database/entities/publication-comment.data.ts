import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { VenturePublicationData } from "./venture-publication.data";
import { UserData } from "./user.data";

@Entity({ name: "publication_comment" })
export class PublicationCommentData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => UserData, (user) => user.comments, { eager: true })
  @JoinColumn({ name: "authorId" })
  author: UserData;

  @Column()
  content: string;

  @ManyToOne(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.comments
  )
  @JoinColumn({ name: "publicationId" })
  publication: VenturePublicationData;

  @CreateDateColumn()
  createdAt: Date;
}
