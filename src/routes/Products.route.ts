import { Router } from 'express';
import ProductsController from '../controllers/Products.controller';

const route = Router();
const controller = new ProductsController();

route.get('/', controller.getAll);

export default route;