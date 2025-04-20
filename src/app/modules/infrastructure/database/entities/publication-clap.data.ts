// publication-clap.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";

import { VenturePublicationData } from "./venture-publication.data";
import { UserData } from "./user.data";

@Entity({ name: "publication_clap" })
@Unique(["publicationId", "userId"])
export class PublicationClapData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  publicationId: string;

  @Column()
  userId: string;

  @ManyToOne(
    () => VenturePublicationData,
    (venturePublication) => venturePublication.claps
  )
  @JoinColumn({ name: "publicationId" })
  publication: VenturePublicationData;

  @ManyToOne(() => UserData, (user) => user.publicationClaps, { eager: true })
  @JoinColumn({ name: "userId" })
  user: UserData;

  @CreateDateColumn()
  createdAt: Date;
}
