/** **generic** search by fields */
export interface SearchByFieldsInterface<T> {
  /**
  * search by fields
  * @param {any} search search parameters
  * @returns {T | null} generic
  */
  search: (search: any) => Promise<T | null>
}
