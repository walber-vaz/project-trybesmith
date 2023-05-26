import { Request, Response, NextFunction } from 'express';
import Jwt from '../auth';
import orderSchema from '../schemas/order';

export const validateToken = (req: Request, res: Response, next:NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    Jwt.verifyToken(authorization);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  return next();
};

export const validateOrder = (req: Request, res: Response, next:NextFunction) => {
  const { userId, productIds } = req.body;

  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }

  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }

  if (productIds.length <= 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  const validation = orderSchema.validate(req.body, { convert: false });

  if (validation.error) {
    return res.status(422).json({ message: validation.error.message });
  }

  return next();
};