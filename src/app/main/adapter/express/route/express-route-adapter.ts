import { Request, Response } from 'express'
import {
  ControllerInterface, HttpRequestInterface, HttpResponseInterface
} from '../../generic/protocols'

/**
* route adaptation to application concept
* @param {ControllerInterface} controller application controller
*/
export const expressRouteAdapter = (controller: ControllerInterface) => {
  /**
  * application entry point
  * @param {Request} req driver HTTP request
  * @param {Response} res driver HTTP response
  */
  return async (req: Request, res: Response) => {
    const { body, params, query } = req
    const request: HttpRequestInterface = { body, params, query }

    const response: HttpResponseInterface = await controller.handle(request)
    const { statusCode, errorMessage } = response

    if (statusCode >= 200 && statusCode <= 299) {
      res.status(statusCode).json(response)
    } else {
      res.status(statusCode).json({
        ...response, errorMessage: errorMessage?.message
      })
    }
  }
}
