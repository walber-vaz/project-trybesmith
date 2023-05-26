import { Router } from 'express';
import OrderController from '../controllers/Order';
import { validateOrder, validateToken } from '../middlewares/tokenValidated';

const orderRouter = Router();

orderRouter.get('/', OrderController.index);
orderRouter.post('/', validateToken, validateOrder, OrderController.create);

export default orderRouter;