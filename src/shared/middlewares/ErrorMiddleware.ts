import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../errors';

export const ErrorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof ApplicationError) {
    return response
      .status(error.statusCode)
      .json({ name: error.name, message: error.message });
  }

  response
    .status(500)
    .json({ name: error.name, message: 'Internal server error' });
};
