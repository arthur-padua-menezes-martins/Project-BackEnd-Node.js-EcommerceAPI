import { HttpResponseBodyInterface } from './body/http-response-body'

/**
* response interface for the application response type
*/
export interface HttpResponseInterface {
  /** @param {number} statusCode status code definitions */
  statusCode: number
  /** @param {HttpResponseBodyInterface} body infomations of response */
  body: HttpResponseBodyInterface
  /** @param {string} successMessage success message */
  successMessage?: string
  /** @param {Error} errorMessage error message */
  errorMessage?: Error
  /** @param {string[]} errorMessage invalid fields presents in request */
  invalidFields?: string[]
}
