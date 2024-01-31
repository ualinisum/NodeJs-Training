import { Router } from "express";
import book from "../controller/book";
import shoppingCart from "../controller/shoppingCart";
import order from "../controller/order";

const router = Router();

// Book CRUD
router.get("/books", book.getAllBooks);
router.post("/book", book.addBook);
router.put("/book/:id", book.updateBook);
router.delete("/book/:id", book.deleteBook);

// Add book to shopping cart
router.post('/cart/add/:userId/:bookId', shoppingCart.addToShoppingCart);

// Remove book from shopping cart
router.delete('/cart/remove/:userId/:bookId', shoppingCart.removeFromShoppingCart);

// Place an order
router.post('/order/place/:userId', order.placeOrder);

// Retrieve order history for a user
router.get('/order/history/:userId', order.getOrderHistory);

export default router;
