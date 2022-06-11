import { ApplicationError } from './ApplicationError';

export class UnauthorizedException extends ApplicationError {
  public readonly statusCode: number;

  constructor(message: string) {
    super();

    this.name = 'Unauthorized';
    this.statusCode = 401;
    this.message = message;
  }
}
