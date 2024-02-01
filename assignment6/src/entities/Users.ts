import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 200, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  address: string;
}
