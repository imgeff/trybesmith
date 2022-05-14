import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import Token from '../middlewares/token';

const controller = new UsersController();
const token = new Token();

const route = Router();

route.post('/', controller.create, token.generate);

export default route;