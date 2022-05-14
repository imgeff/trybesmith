import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import Token from '../middlewares/token';
import joiValidate from '../middlewares/validations/joiValidate';
import { users } from '../utils/joiSchemas';

const controller = new UsersController();
const token = new Token();

const route = Router();

route.post('/', joiValidate(users), controller.create, token.generate);

export default route;