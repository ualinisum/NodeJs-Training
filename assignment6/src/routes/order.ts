import { Router } from "express";
import order from "../controller/order";

const orderRouter = Router();

orderRouter.post('/order/place/:userId', order.placeOrder);
orderRouter.get('/order/history/:userId', order.getOrderHistory);

export default orderRouter;
