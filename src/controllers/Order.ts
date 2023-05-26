import { Response, Request } from 'express';
import OrderService from '../services/Order';

class OrderController {
  static async index(req: Request, res: Response): Promise<Response> {
    const orders = await OrderService.getAll();
    return res.status(200).json(orders);
  }
}

export default OrderController;