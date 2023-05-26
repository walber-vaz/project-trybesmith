import { Response, Request, NextFunction } from 'express';

const loginValidated = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  return next();
};

export default loginValidated;