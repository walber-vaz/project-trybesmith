import { Model } from 'sequelize';
import { Product } from '../types/Product';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

class ProductService {
  static async getAll(): Promise<Model<Product, ProductInputtableTypes>[]> {
    const prodducts = await ProductModel.findAll();
    return prodducts;
  }

  static async createProduct(
    product: ProductInputtableTypes,
  ): Promise<Model<Product, ProductInputtableTypes>> {
    const productCreated = await ProductModel.create(product);
    return productCreated;
  }

  static async updateProduct(data: Product): Promise<[affectedCount: number]> {
    const productUpdated = await ProductModel.update(data, { where: { id: data.id } });
    return productUpdated;
  }
}

export default ProductService;