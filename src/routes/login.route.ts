import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import { login } from '../utils/joiSchemas';
import joiValidate from '../middlewares/validations/joiValidate';
import Token from '../middlewares/token';

const route = Router();
const token = new Token();
const controller = new LoginController();

route.post('/', joiValidate(login), controller.isUser, token.generate);

export default route;