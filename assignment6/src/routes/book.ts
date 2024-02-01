import { Router } from "express";
import book from "../controller/book";

const bookRouter = Router();

bookRouter.get("/books", book.getAllBooks);
bookRouter.post("/book", book.addBook);
bookRouter.put("/book/:id", book.updateBook);
bookRouter.delete("/book/:id", book.deleteBook);

export default bookRouter;
