import { ApplicationError } from './ApplicationError';

export class NotFoundException extends ApplicationError {
  public readonly statusCode: number;

  constructor(message: string) {
    super();

    this.name = 'Not Found';
    this.statusCode = 404;
    this.message = message;
  }
}
