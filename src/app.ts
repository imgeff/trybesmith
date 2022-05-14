import express from 'express';
import routeProducts from './routes/products.route';
import routeUsers from './routes/users.route';
import manageErrors from './middlewares/errors/manageErrors';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

app.use('/users', routeUsers);

app.use(manageErrors);
export default app;
