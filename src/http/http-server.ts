import express, { Request, Response } from 'express'
import cors from 'cors'
import logger from './middleware/logger.middleware'
import { initRoutes } from './routes'
import Logger from '../utils/logger'

export class HttpServer {
  private readonly logger = new Logger({ origin: 'http server class' })

  init() {
    const app = express()
    const PORT = process.env.HTTP_PORT

    app.use(cors())
    app.use(logger())

    app.get('/status', (req: Request, res: Response) => res.sendStatus(200))

    initRoutes(app)

    try {
      app.listen(PORT, () => {
        this.logger.info(`⚡️server is running at http://localhost:${PORT}`)
      })
    } catch (err) {
      this.logger.error(`error on init http server: ${JSON.stringify(err)}`)
      throw err
    }
  }
}
