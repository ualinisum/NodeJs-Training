import { Books } from "../entities/Book";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root12345",
  database: "new_book_store",
  entities: [Books],
  synchronize: true,
  logging: false,
});
