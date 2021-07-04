export enum ErrorType {
  SCHEMA_VALIDATION_ERROR,
}

export class BaseError extends Error {
  type: ErrorType
  message: string

  constructor(type: ErrorType, message: string) {
    super(message)
    this.type = type
    this.message = message
  }
}
