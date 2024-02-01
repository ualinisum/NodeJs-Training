import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { ShoppingCart } from '../entities/ShoppingCart';
import { authorizeUserByIdParam } from "../middleware/authMiddleware";

const addToShoppingCart = async (req: Request, res: Response) => {
  try {
    await authorizeUserByIdParam(req, res, async () => {
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
      res.json({
        message: "Book added to shopping cart successfully",
        data: shoppingCartData,
      });
    });
  } catch (error) {
    console.log("Error adding to shopping cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeFromShoppingCart = async (req: Request, res: Response) => {
  try {
    await authorizeUserByIdParam(req, res, async () => {
      const { userId, bookId } = req.params;
      const removalData = await AppDataSource.createQueryBuilder()
        .delete()
        .from(ShoppingCart)
        .where("user_id = :userId AND book_id = :bookId", { userId, bookId })
        .execute();
      res.json({
        message: "Book removed from shopping cart successfully",
        data: removalData,
      });
    });
  } catch (error) {
    console.log("Error removing from shopping cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export default {
  addToShoppingCart,
  removeFromShoppingCart,
};