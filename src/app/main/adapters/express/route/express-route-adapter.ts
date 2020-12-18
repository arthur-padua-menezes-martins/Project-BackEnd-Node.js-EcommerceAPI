import { Request, Response } from 'express'
import {
  IController, HttpRequestInterface, HttpResponseInterface
} from '../../generic/protocols'

export const expressRouteAdapter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const { body, params, query } = req
    const request: HttpRequestInterface = { body, params, query }

    const response: HttpResponseInterface = await controller.handle(request)
    const { statusCode, errorMessage, invalidFields } = response

    if (statusCode >= 200 && statusCode <= 299) {
      res.status(statusCode).json(response)
    } else {
      res.status(statusCode).json({
        ...response, errorMessage: errorMessage?.message, invalidFields
      })
    }
  }
}
