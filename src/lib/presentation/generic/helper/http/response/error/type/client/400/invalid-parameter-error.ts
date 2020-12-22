/** error response type invalid parameter */
export class InvalidParameterError extends Error {
  /**
  * @param {string} parameter the invalid parameter (s)
  */
  public constructor (parameter?: string) {
    if (parameter) {
      super(`correctly fill in the following field (s) ${parameter}`)
    } else {
      super('complete all the fields correctly')
    }

    this.name = 'InvalidParameterError'
  }
}
