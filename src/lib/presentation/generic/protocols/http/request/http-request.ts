import { HttpRequestBodyInterface } from './body/http-request-body'
import { HttpRequestHeadersInterface } from './headers/http-request-headers'

/**
* application request type
*/
export interface HttpRequestInterface {
  /** @property {HttpRequestBodyInterface} body request body */
  body?: HttpRequestBodyInterface
  /** @property {any} params request url parameters */
  params?: any
  /** @property {any} query request url query string */
  query?: any
  /** @property {HttpRequestHeadersInterface} headers request headers */
  headers?: HttpRequestHeadersInterface
}
