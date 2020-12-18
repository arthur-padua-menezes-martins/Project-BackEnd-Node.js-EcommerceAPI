/** compare the hash value with another value */
export interface HashComparerInterface {
  /**
  * verify that the values match
  * @param {string} content value
  * @param {string} hash hash value
  * @returns {boolean} represents if values match
  */
  compare: (content: string, hash: string) => Promise<boolean>
}
