import { Router } from 'express';
import ProductController from '../controllers/Product';

const productRouter = Router();

productRouter.get('/', ProductController.index);
productRouter.post('/', ProductController.create);

export default productRouter;