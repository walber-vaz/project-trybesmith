import { Request, Response } from 'express';
import ProductService from '../services/Product';

class ProductController {
  static async index(req: Request, res: Response): Promise<Response> {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  }

  static async create(req: Request, res: Response): Promise<Response> {
    const product = await ProductService.createProduct(req.body);
    return res.status(201).json(product);
  }
}

export default ProductController;