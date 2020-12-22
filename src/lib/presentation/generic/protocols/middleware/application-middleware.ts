import { HttpRequestHeadersInterface, HttpResponseInterface } from '../http'

/**
* middleware interface for the application rules type
*/
export interface MiddlewareInterface {
  /**
  * @method handle main application path
  * @param httpRequest standard application request
  * @returns standard application response
  */
  handle: (httpRequest: HttpRequestHeadersInterface) => Promise<HttpResponseInterface>
}
