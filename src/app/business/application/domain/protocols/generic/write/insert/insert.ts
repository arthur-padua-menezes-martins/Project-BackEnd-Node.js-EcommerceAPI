/** **generic** insert */
export interface InsertInterface<T, R> {
  /**
  * insert
  * @param {T} content inserted content
  * @returns {R | null}
  */
  insert: (content: T) => Promise<R | null>
}
