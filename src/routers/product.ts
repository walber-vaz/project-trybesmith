import { Router } from 'express';
import productValidated from '../middlewares/productValidated';
import ProductController from '../controllers/Product';

const productRouter = Router();

productRouter.get('/', ProductController.index);
productRouter.post('/', productValidated, ProductController.create);

export default productRouter;