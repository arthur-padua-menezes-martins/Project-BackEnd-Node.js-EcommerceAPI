/** **generic** update repository by fields */
export interface SearchByFieldsInterfaceRepository {
  /**
  * update repository by fields
  * @param {any} search search parameters
  * @param {any} content updated content
  */
  update: (search: any, content: any) => Promise<void>
}
