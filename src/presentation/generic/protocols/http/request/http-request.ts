import { HttpRequestInterfaceBody } from './body/http-request-body'
import { HttpRequestInterfaceHeaders } from './headers/http-request-headers'

/**
* request interface for the application request type
*/
export interface HttpRequestInterface {
  /** @param {HttpRequestInterfaceBody} body infomations of request */
  body?: HttpRequestInterfaceBody
  /** @param {any} params parameters */
  params?: any
  /** @param {any} query query string */
  query?: any
  /** @param {HttpRequestInterfaceHeaders} headers HTTP headers */
  headers?: HttpRequestInterfaceHeaders
}
