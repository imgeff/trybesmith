import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import joiValidate from '../middlewares/validations/joiValidate';
import { products } from '../utils/joiSchemas';

const route = Router();
const controller = new ProductsController();

// ========================= GET ============================
route.get('/', controller.getAll);

// ========================= POST ============================
route.post('/', joiValidate(products), controller.create);

export default route;