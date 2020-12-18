/** create encrypt value */
export interface EncrypterInterface {
  /**
  * transform to encrypted value
  * @param {string} content value for the encrypt
  * @returns {string} encrypt value
  */
  encrypt: (content: string) => Promise<string>
}
