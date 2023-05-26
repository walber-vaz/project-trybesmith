import { Response, Request } from 'express';
import OrderService from '../services/Order';
import LoginService from '../services/Login';

class OrderController {
  static async index(req: Request, res: Response): Promise<Response> {
    const orders = await OrderService.getAll();
    return res.status(200).json(orders);
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const user = await LoginService.getByIdUser(body.userId);

    if (!user) return res.status(404).json({ message: '"userId" not found' });

    await OrderService.createOrder(body);
    return res.status(201).json(body);
  }
}

export default OrderController;