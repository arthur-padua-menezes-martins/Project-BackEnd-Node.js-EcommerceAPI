import mongoose, { Mongoose, Types, Collection } from 'mongoose'
import { StorageHelperInterface, MongoHelperInterface } from '../../generic/protocols'
import env from '../../../../../../../../main/config/env'

/** auxiliary to access the database */
export default class MongoHelper implements StorageHelperInterface, MongoHelperInterface {
  /** class instance */
  private static _instance: MongoHelper
  /** conection */
  private client!: Mongoose
  /** url to connect in database */
  private readonly url: string = env.repository.connection.url

  /** restricted constructor */
  private constructor () {}

  /**
  * get instance of the class
  * @returns {MongoHelper} instance of the class
  */
  static get instance (): MongoHelper {
    if (!MongoHelper._instance) {
      MongoHelper._instance = new MongoHelper()
    }

    return MongoHelper._instance
  }

  /**
  * verify if connection is established
  * @returns {boolean} represents if application is connected
  */
  async isConnected (): Promise<boolean> {
    return this.client !== null
  }

  /** connect to database */
  async connect (): Promise<void> {
    this.client = await mongoose.connect(this.url, {
      useNewUrlParser: true, useUnifiedTopology: true
    })
  }

  /** disconnect to database */
  async disconnect (): Promise<void> {
    const closeConnection = this.client.connection.close()
    await closeConnection
  }

  /**
  * get collection by name
  * @param {string} name the single name
  * @param {any} options options modifier
  * @returns {Collection} database collection
  */
  async getCollection (name: string, options?: any): Promise<Collection> {
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
  transformObjectId (id: string): Types.ObjectId {
    const objectId = this.client.Types.ObjectId(id)
    return objectId
  }

  /**
  * map _id property in to id property
  * @param {any} content the content but has mapped
  * @returns {any} the mapped input content
  */
  mapId (content: any): any {
    const { _id, ...rest } = content

    const exists = (_id && rest)

    if (exists) {
      return Object.assign({}, rest, { id: _id })
    } else {
      return null
    }
  }
}
