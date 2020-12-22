/** error response type unprocessable */
export class UnprocessableError extends Error {
  public constructor () {
    super('instructions could not be processed')

    this.name = 'UnprocessableError'
  }
}
