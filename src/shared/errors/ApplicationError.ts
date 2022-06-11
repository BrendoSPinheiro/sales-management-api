export abstract class ApplicationError extends Error {
  public abstract readonly statusCode: number;
}
