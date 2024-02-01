import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 200 })
  title: string;

  @Column({ type: "varchar", length: 200 })
  authorId: number;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  price: number;

  @Column()
  quantity_available: number;

  @Column({ default: false, type: "boolean" })
  is_published: boolean;
}
