import express from 'express';
import route from './routes/Products.route';
import manageErrors from './middlewares/manageErrors';

const app = express();

app.use(express.json());

app.use('/products', route);

app.use(manageErrors);
export default app;
