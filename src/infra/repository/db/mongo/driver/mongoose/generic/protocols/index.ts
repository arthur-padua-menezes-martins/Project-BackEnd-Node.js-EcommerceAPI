import { Types, Collection } from 'mongoose'

/** auxiliary to access the storage */
export interface StorageHelperInterface {
  /** verify if connection is established */
  isConnected: () => Promise<boolean>

  /** connect to storage */
  connect: () => Promise<void>

  /** disconnect to storage */
  disconnect: () => Promise<void>
}

/** auxiliary to access mongo database */
export interface MongoHelperInterface {

  /** get collection of mongo database */
  getCollection: (name: string, options?: any) => Promise<Collection>

  /** transform single id to mongo objectId */
  transformObjectId: (id: string) => Types.ObjectId

  /** map _id property in to id property */
  mapId: (content: any) => any
}
