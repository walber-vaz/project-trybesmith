import { Response, Request, NextFunction } from 'express';
import productSchema from '../schemas/product';

const productValidated = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!body.price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  const { error } = productSchema.validate(body);

  if (error) {
    return res.status(422).json({ message: error.message });
  }

  return next();
};

export default productValidated;