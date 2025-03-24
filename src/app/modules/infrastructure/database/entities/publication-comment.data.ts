import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { UserDetailData } from "./user-detail.data";
import { VenturePublicationData } from "./venture-publication.data";

@Entity({ name: "publication_comment" })
export class PublicationCommentData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.comments)
  @JoinColumn({ name: "authorDetailId" })
  author: UserDetailData;

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
