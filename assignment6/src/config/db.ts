import { Books } from "../entities/Book";
import { Users } from "../entities/Users";
import { ShoppingCart } from "../entities/ShoppingCart";
import { Order } from "../entities/Orders";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root12345",
  database: "new_book_store",
  entities: [Books, Users, ShoppingCart, Order ],
  synchronize: true,
  logging: false,
});
