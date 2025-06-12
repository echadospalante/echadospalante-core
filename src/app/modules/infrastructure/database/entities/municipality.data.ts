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

@Entity({ name: "municipality" })
export class MunicipalityData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

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
