import Jwt from 'jsonwebtoken';

const secret = 'secret';

const CONFIG: Jwt.SignOptions = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (payload: Jwt.JwtPayload): string => {
  const token = Jwt.sign({ data: payload }, secret, CONFIG);
  return token;
};

export default createToken;