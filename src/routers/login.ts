import { Router } from 'express';
import LoginController from '../controllers/Login';
import loginValidated from '../middlewares/loginValidated';

const loginRouter = Router();

loginRouter.post('/', loginValidated, LoginController.login);

export default loginRouter;