import { AppDataSource } from "../config/db";
import { ShoppingCart } from "../entities/ShoppingCart";

export const calculateTotalAmount = async (userId: number): Promise<number> => {
    const shoppingCart = await AppDataSource.manager.findOne(ShoppingCart, {
      where: { user_id: userId },
      relations: ['book'],
    });
  
    if (!shoppingCart || !shoppingCart.book) {
      return 0;
    }
    const totalAmount = shoppingCart.book.price * shoppingCart.book.quantity_available;
    return totalAmount;
};


export const clearShoppingCart = async (userId: number): Promise<void> => {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(ShoppingCart)
      .where('user_id = :userId', { userId })
      .execute();
};
  