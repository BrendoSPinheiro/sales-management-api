import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import { routes } from './routes';
import { ErrorMiddleware } from '../middlewares/ErrorMiddleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware);

export { app };
