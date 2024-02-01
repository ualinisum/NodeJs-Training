import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from "./Users";
import { Books } from "./Book"; 

@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  cart_id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => Users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  book_id: number;
  
  @ManyToOne(() => Books, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Books; 

}
