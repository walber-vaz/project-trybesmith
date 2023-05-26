import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import createToken from '../auth';
import LoginService from '../services/Login';

class LoginController {
  static async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    const user = await LoginService.loginUser(username);

    if (!user) return res.status(401).json({ message: 'Username or password invalid' });

    const passwordIsValid = bcrypt.compareSync(password, user.dataValues.password);

    if (!passwordIsValid) return res.status(401).json({ message: 'Username or password invalid' });

    const token = createToken({ id: user.dataValues.id, username: user.dataValues.username });

    return res.status(200).json({ token });
  }
}

export default LoginController;