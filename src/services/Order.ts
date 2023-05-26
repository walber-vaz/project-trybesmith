import { Order } from '../types/Order';
import OrderModel, { 
  OrderInputtableTypes, 
  OrderSequelizeModel, 
} from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import ProductService from './Product';

class OrderService {
  static async getAll(): Promise<Order[]> {
    const [products, orders] = await Promise.all([ProductModel.findAll(), OrderModel.findAll()]);
  
    const newArrayOrders: Order[] = orders.map(({ dataValues: { id, userId } }) => {
      const productIds = products
        .filter(({ dataValues: { orderId } }) => orderId === id)
        .map(({ dataValues }) => dataValues.id);
      
      return {
        id,
        userId,
        productIds,
      };
    });
  
    return newArrayOrders;
  }

  static async createOrder(order: OrderInputtableTypes): Promise<OrderSequelizeModel> {
    const { productIds, ...newOrder } = order;
  
    const orderCreated = await OrderModel.create(newOrder);
  
    const products = await ProductService.getAll();
  
    const updateProductPromises = products
      .filter(({ dataValues: { id } }) => productIds?.includes(id))
      .map(({ dataValues }) => dataValues)
      .map((p) => ProductService.updateProduct({ ...p, orderId: orderCreated.dataValues.id }));
  
    await Promise.all(updateProductPromises);
  
    return orderCreated;
  }
}

export default OrderService;