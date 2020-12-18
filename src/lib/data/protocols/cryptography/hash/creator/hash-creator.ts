/** create hash value */
export interface HashCreatorInterface {
  /**
  * transform to hashed value
  * @param {string} content value for the hash
  * @returns {string} hash value
  */
  hash: (content: string) => Promise<string>
}
