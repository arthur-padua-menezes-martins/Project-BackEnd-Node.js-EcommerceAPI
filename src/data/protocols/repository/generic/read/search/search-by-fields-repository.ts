/** **generic** search repository by fields */
export interface SearchByFieldsInterfaceRepository<T> {
  /**
  * search repository by fields
  * @param {any} search search parameters
  * @returns {T | null} generic repository
  */
  search: (search: any) => Promise<T | null>
}
