import express, { Request, Response } from 'express'
import cors from 'cors'
import { initRoutes } from './http/routes'
import logger from './http/middleware/logger.middleware'
require('dotenv').config()

function run() {
  const app = express()
  const PORT = process.env.HTTP_PORT

  app.use(cors())
  app.use(logger())

  app.get('/status', (req: Request, res: Response) => res.sendStatus(200))

  initRoutes(app)

  try {
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

export default run
