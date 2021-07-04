import { NextFunction, Request, Response } from 'express'
import Logger from '../../utils/logger'

const logger = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const logger = new Logger({ origin: 'logger middleware' })

    const message = `${req.method} ${req.url} ${
      req.body ? JSON.stringify(req.body) : ''
    }`

    logger.info(message)

    next()
  }
}

export default logger
