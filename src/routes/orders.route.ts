import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';

const route = Router();
const controller = new OrdersController();

route.get('/', controller.getAll);

export default route;