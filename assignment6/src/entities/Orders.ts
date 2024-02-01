import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  order_date: Date;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total_amount: number;
}
