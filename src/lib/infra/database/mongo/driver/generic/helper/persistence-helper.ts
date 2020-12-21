import mongoose, { Mongoose, Types, Collection } from 'mongoose'
import { StorageHelperInterface, PersistenceHelperInterface } from '../protocols'
import env from '@/app/main/config/env'

/** auxiliary to access the database */
export default class PersistenceHelper implements StorageHelperInterface, PersistenceHelperInterface {
  /** class instance */
  private static _instance: PersistenceHelper
  /** conection */
  private client!: Mongoose
  /** url to connect in database */
  private readonly url: string = env.repository.connection.url

  /** restricted constructor */
  private constructor () {}

  /**
  * get instance of the class
  * @returns {PersistenceHelper} instance of the class
  */
  static get instance (): PersistenceHelper {
    if (!PersistenceHelper._instance) {
      PersistenceHelper._instance = new PersistenceHelper()
    }

    return PersistenceHelper._instance
  }

  /** established connection */
  public async connect (): Promise<void> {
    this.client = await mongoose.connect(this.url, {
      useNewUrlParser: true, useUnifiedTopology: true
    })
  }

  /**
  * verify if connection is established
  * @returns {boolean} represents if persistence method is connected
  */
  public async isConnected (): Promise<boolean> {
    const isConnected = this.client !== null
    return isConnected
  }

  /** disconnect */
  public async disconnect (): Promise<void> {
    const disconnect = this.client.connection.close()
    await disconnect
  }

  /**
  * get collection by name
  * @param {string} name the single name
  * @param {any} options options modifier
  * @returns {Collection} database collection
  */
  public async getCollection (name: string, options?: any): Promise<Collection> {
    const isConnected: boolean = await this.isConnected()

    if (!isConnected) {
      await this.connect()
    }

    const collection: Collection = this.client.connection.collection(name, options)
    return collection
  }

  /**
  * transform id in to objectId
  * @param {string} id the single id
  * @returns {Types.ObjectId} objectId
  */
  public transformObjectId (id: string): Types.ObjectId {
    const objectId = this.client.Types.ObjectId(id)
    return objectId
  }

  /**
  * map _id property in to id property
  * @param {any} content the content but has mapped
  * @returns {any} the mapped input content
  */
  public mapId (content: any): any {
    const { _id, ...rest } = content

    const exists = (_id && rest)

    if (exists) {
      return Object.assign({}, rest, { id: _id })
    } else {
      return null
    }
  }
}
