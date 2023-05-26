import UserModel, { UserSequelizeModel } from '../database/models/user.model';

class LoginService {
  static async loginUser(username: string): Promise<UserSequelizeModel | null> {
    const user = (await UserModel.findOne({ where: { username } }));
    return user;
  }
}

export default LoginService;