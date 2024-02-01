import { Router } from "express";
import shoppingCart from "../controller/shoppingCart";

const cartRouter = Router();

cartRouter.post('/cart/add/:userId/:bookId', shoppingCart.addToShoppingCart);
cartRouter.delete('/cart/remove/:userId/:bookId', shoppingCart.removeFromShoppingCart);

export default cartRouter;
