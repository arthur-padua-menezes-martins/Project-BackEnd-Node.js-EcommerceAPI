import { Request, Response, NextFunction } from 'express'
import {
  MiddlewareInterface, HttpRequestInterface, HttpResponseInterface
} from '../../generic/protocols'

export const expressRouteAdapter = (middleware: MiddlewareInterface) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { headers } = req
    const request: HttpRequestInterface = { headers }

    const response: HttpResponseInterface = await middleware.handle(request)
    const { statusCode, errorMessage, invalidFields } = response

    if (statusCode >= 200 && statusCode <= 299) {
      res.status(statusCode).json(response)

      next()
    } else {
      res.status(statusCode).json({
        ...response, errorMessage: errorMessage?.message, invalidFields
      })
    }
  }
}
