import { Router } from "express";
import book from "../controller/book";

const router = Router();

router.get("/books", book.getAllBooks);
router.post("/book", book.addBook);
router.put("/book/:id", book.updateBook);
router.delete("/book/:id", book.deleteBook);

export default router;
