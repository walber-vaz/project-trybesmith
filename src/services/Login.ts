import UserModel, { UserSequelizeModel } from '../database/models/user.model';

class LoginService {
  static async loginUser(username: string): Promise<UserSequelizeModel | null> {
    const user = (await UserModel.findOne({ where: { username } }));
    return user;
  }

  static async getByIdUser(id: number): Promise<UserSequelizeModel | null> {
    const user = (await UserModel.findByPk(id));
    return user;
  }
}

export default LoginService;