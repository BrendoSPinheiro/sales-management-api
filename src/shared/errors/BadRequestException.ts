import { ApplicationError } from './ApplicationError';

export class BadRequestException extends ApplicationError {
  public readonly statusCode: number;

  constructor(message: string) {
    super();

    this.name = 'Bad Request';
    this.statusCode = 400;
    this.message = message;
  }
}
