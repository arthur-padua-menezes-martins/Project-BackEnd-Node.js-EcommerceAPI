/** **generic** insert repository */
export interface InsertInterfaceRepository<T, R> {
  /**
  * insert repository
  * @param {T} content inserted content
  * @returns {R | null} generic repository
  */
  insert: (content: T) => Promise<R | null>
}
