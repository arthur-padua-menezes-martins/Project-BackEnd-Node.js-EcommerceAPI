/**
* error response type missing parameter
*/
export class MissingParameterError extends Error {
  /**
  * @constructor
  * @param {string} parameter the missing parameter (s)
  */
  public constructor (parameter?: string) {
    if (parameter) {
      super(`correctly fill in the following field (s) ${parameter}`)
    } else {
      super('complete all the fields correctly')
    }

    this.name = 'MissingParameterError'
  }
}
