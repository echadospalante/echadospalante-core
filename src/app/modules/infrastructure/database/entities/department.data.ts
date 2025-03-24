import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { MunicipalityData } from "./municipality.data";

@Entity({
  name: "department",
})
export class DepartmentData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MunicipalityData, (municipality) => municipality.department)
  municipalities: MunicipalityData[];
}
