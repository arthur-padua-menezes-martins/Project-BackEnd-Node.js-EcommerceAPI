import { HttpResponseBodyInterface } from './body/http-response-body'

/**
* application response type
*/
export interface HttpResponseInterface {
  /** @property {number} statusCode response status code definition */
  statusCode: number
  /** @property {HttpResponseBodyInterface} body response body definition */
  body: HttpResponseBodyInterface
  /** @property {string} successMessage success message */
  successMessage?: string
  /** @property {Error} errorMessage error message */
  errorMessage?: Error
  /** @property {string[]} errorMessage invalid fields presents in request */
  invalidFields?: string[]
}
