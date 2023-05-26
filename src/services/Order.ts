import { Order } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

class OrderService {
  static async getAll(): Promise<Order[]> {
    const products = await ProductModel.findAll();
    const orders = await OrderModel.findAll();

    const newArrayOrders: Order[] = [];

    orders.forEach(({ dataValues: { id, userId } }) => {
      newArrayOrders.push({
        id,
        userId,
        productIds: products
          .filter(({ dataValues: { orderId } }) => orderId === id)
          .map((product) => product.dataValues.id),
      });
    });

    return newArrayOrders;
  }
}

export default OrderService;