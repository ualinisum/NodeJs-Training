import { Request, Response } from "express";
import { AppDataSource } from "../config/db";
import { Order } from '../entities/Orders';
import { calculateTotalAmount, clearShoppingCart } from "../utils/functions";

const placeOrder = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const uId = parseInt(userId);
    const totalAmount = await calculateTotalAmount(uId);
    const orderData = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Order)
      .values([
        {
          user_id: uId,
          total_amount: totalAmount,
        },
      ])
      .execute();
    await clearShoppingCart(uId);
    res.json({ message: 'Order placed successfully', data: orderData });
  };
  
  const getOrderHistory = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const orderHistory = await AppDataSource.manager.find(Order, { where: { user_id: parseInt(userId) } });
    res.json(orderHistory);
  };
  
  export default {
    placeOrder,
    getOrderHistory,
  }