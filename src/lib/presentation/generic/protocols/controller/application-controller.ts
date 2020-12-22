import { HttpRequestInterface, HttpResponseInterface } from '../http'

/**
* controller interface for the application rules type
*/
export interface ControllerInterface {
  /**
   * @method handle main application entry
   * @param {HttpRequestInterface} httpRequest standard application request
   * @returns {HttpResponseInterface} standard application response
   */
  handle: (httpRequest: HttpRequestInterface) => Promise<HttpResponseInterface>
}
