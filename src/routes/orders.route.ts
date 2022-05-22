import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import Token from '../middlewares/token';
import joiValidate from '../middlewares/validations/joiValidate';
import { orders } from '../utils/joiSchemas';

const route = Router();
const controller = new OrdersController();
const token = new Token();

// ========================= GET ============================
route.get('/', controller.getAll);

// ========================= POST ============================
route.post('/', token.verify, joiValidate(orders), controller.create);

export default route;