import { Database } from './database'
import { HttpServer } from './http/http-server'

require('dotenv').config()

async function run() {
  const database = new Database()
  await database.connect()

  const httpServer = new HttpServer()
  httpServer.init()
}

export default run
