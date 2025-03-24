// publication-clap.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { UserDetailData } from "./user-detail.data";
import { VenturePublicationData } from "./venture-publication.data";

@Entity()
export class PublicationClapData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.claps
  )
  @JoinColumn({ name: "publicationId" })
  publication: VenturePublicationData;

  @ManyToOne(() => UserDetailData, (userDetail) => userDetail.publicationClaps)
  @JoinColumn({ name: "userDetailId" })
  user: UserDetailData;

  @CreateDateColumn()
  createdAt: Date;
}
