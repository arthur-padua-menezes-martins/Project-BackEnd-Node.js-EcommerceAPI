/**
* error response type access denied
*/
export class AccessDeniedError extends Error {
  public constructor () {
    super('access denied')

    this.name = 'AccessDeniedError'
  }
}
