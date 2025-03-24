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
import { UserDetailData } from "./user-detail.data";

@Entity()
export class MunicipalityData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => DepartmentData, (department) => department.municipalities)
  @JoinColumn({ name: "departmentId" })
  department: DepartmentData;

  @OneToMany(() => UserDetailData, (ud) => ud.municipality)
  userDetails: UserDetailData[];
}
