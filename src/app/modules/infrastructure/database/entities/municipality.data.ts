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

import { DepartmentData } from "./department.data";
import { UserData } from "./user.data";
import { VentureLocationData } from "./venture-location.data";
import { EventLocationData } from "./event-location.data";

@Entity({ name: "municipality" })
export class MunicipalityData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "double precision" })
  lat: number;

  @Column({ type: "double precision" })
  lng: number;

  @OneToMany(
    () => VentureLocationData,
    (ventureLocation) => ventureLocation.municipality,
    { eager: true }
  )
  ventureLocations: VentureLocationData[];

  @OneToMany(
    () => EventLocationData,
    (eventLocation) => eventLocation.municipality,
    { eager: true }
  )
  eventLocations: EventLocationData[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => DepartmentData, (department) => department.municipalities)
  @JoinColumn({ name: "departmentId" })
  department: DepartmentData;

  @OneToMany(() => UserData, (user) => user.municipality)
  users: UserData[];
}
