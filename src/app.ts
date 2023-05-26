import express, { Application } from 'express';
import productRouter from './routers/product';

class App {
  public readonly app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/products', productRouter);
  }
}

export default new App().app;
