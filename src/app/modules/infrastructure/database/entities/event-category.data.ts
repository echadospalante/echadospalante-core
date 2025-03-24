// event-category.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { VentureEventData } from "./venture-event.data";

@Entity()
export class EventCategoryData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => VentureEventData, (ventureEvent) => ventureEvent.categories)
  @JoinTable({
    name: "x_event_category",
    joinColumn: { name: "categoryId", referencedColumnName: "id" },
    inverseJoinColumn: { name: "eventId", referencedColumnName: "id" },
  })
  events: VentureEventData[];
}
