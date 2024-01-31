import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { ShoppingCart } from '../entities/ShoppingCart';


const addToShoppingCart = async (req: Request, res: Response) => {
  const { userId, bookId } = req.params;
  const shoppingCartData = await AppDataSource.createQueryBuilder()
    .insert()
    .into(ShoppingCart)
    .values([
      {
        user_id: parseInt(userId),
        book_id: parseInt(bookId),
      },
    ])
    .execute();
  res.json({ message: 'Book added to shopping cart successfully', data: shoppingCartData });
};

const removeFromShoppingCart = async (req: Request, res: Response) => {
  const { userId, bookId } = req.params;
  const removalData = await AppDataSource.createQueryBuilder()
    .delete()
    .from(ShoppingCart)
    .where('user_id = :userId AND book_id = :bookId', { userId, bookId })
    .execute();
  res.json({ message: 'Book removed from shopping cart successfully', data: removalData });
};

export default {
  addToShoppingCart,
  removeFromShoppingCart,
};