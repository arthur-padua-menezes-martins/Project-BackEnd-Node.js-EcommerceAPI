/** **generic** insert */
export interface InsertInterface<T, R> {
  /**
  * insert
  * @param {T} content inserted content
  * @returns {R | null} generic
  */
  insert: (content: T) => Promise<R | null>
}
