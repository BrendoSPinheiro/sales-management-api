import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { ApplicationError } from '@shared/errors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ApplicationError) {
      return response
        .status(error.statusCode)
        .json({ name: error.name, message: error.message });
    }

    response
      .status(500)
      .json({ name: error.name, message: 'Internal server error' });
  },
);

export { app };
