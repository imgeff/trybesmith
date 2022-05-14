import express from 'express';
import route from './routes/products.route';
import manageErrors from './middlewares/errors/manageErrors';

const app = express();

app.use(express.json());

app.use('/products', route);

app.use(manageErrors);
export default app;
