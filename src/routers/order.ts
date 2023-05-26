import { Router } from 'express';
import OrderController from '../controllers/Order';

const orderRouter = Router();

orderRouter.get('/', OrderController.index);

export default orderRouter;