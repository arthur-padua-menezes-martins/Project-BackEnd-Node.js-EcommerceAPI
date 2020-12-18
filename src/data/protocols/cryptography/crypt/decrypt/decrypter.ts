/** create decrypt value */
export interface DecrypterInterface {
  /**
  * transform to decrypted value
  * @param {string} content value for the decrypt
  * @returns {string} decrypt value
  */
  decrypt: (content: string) => Promise<string>
}
