import express from 'express';
import route from './Routes/Products.route';

const app = express();

app.use(express.json());

app.use('/products', route);

export default app;
