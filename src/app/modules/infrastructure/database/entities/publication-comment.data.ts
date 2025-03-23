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

@Entity()
export class PublicationCommentData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  authorDetailId: string;

  @Column()
  publicationId: string;

  @Column()
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.comments)
  @JoinColumn({ name: "authorDetailId" })
  User: UserDetailData;

  @ManyToOne(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.comments
  )
  @JoinColumn({ name: "publicationId" })
  venturePublication: VenturePublicationData;
}
