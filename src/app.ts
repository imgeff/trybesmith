import express from 'express';
import routeProducts from './routes/products.route';
import routeUsers from './routes/users.route';
import routeOrders from './routes/orders.route';
import routeLogin from './routes/login.route';
import manageErrors from './middlewares/errors/manageErrors';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

app.use('/users', routeUsers);

app.use('/login', routeLogin);

app.use('/orders', routeOrders);

app.use(manageErrors);
export default app;
