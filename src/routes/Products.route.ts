import { Router } from 'express';
import ProductsController from '../controllers/Products.controller';
import joiValidate from '../middlewares/joiValidate';
import { products } from '../utils/joiSchemas';

const route = Router();
const controller = new ProductsController();

route.get('/', controller.getAll);

route.post('/', joiValidate(products), controller.create);

export default route;