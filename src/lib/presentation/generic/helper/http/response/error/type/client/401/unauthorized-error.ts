/** error response type unauthorized */
export class UnauthorizedError extends Error {
  public constructor () {
    super('unauthorized')

    this.name = 'UnauthorizedError'
  }
}
