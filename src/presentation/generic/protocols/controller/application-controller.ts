import { HttpRequestInterface, HttpResponseInterface } from '../http'

/**
* controller interface for the application rules type
*/
export interface IController {
  /**
   * @method handle main application path
   * @param httpRequest standard application request
   * @returns standard application response
   */
  handle: (httpRequest: HttpRequestInterface) => Promise<HttpResponseInterface>
}
