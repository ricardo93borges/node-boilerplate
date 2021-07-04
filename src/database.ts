import { connect as mongooseConnect } from 'mongoose'
import Logger from './utils/logger'

export class Database {
  private readonly logger = new Logger({ origin: 'database class' })

  async connect() {
    try {
      this.logger.info('connecting to database')

      await mongooseConnect(`${process.env.MONGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      this.logger.info('successfully connected to database')
    } catch (err) {
      this.logger.error(`error on connect to database: ${JSON.stringify(err)}`)
      throw err
    }
  }
}
