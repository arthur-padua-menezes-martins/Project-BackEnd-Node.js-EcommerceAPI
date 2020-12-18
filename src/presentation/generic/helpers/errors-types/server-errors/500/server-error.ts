/**
* error response type server error
*/
export class ServerError extends Error {
  /**
  * @constructor
  * @param {string} errorStack stack of error
  */
  public constructor (errorStack?: string) {
    super('a problem affects the functioning of the server, try again later!')

    this.name = 'ServerError'
    this.stack = errorStack
  }
}
