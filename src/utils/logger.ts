import winston, { format, transports, Logger as WinstonLogger } from 'winston'
require('dotenv').config()

class Logger {
  logger: WinstonLogger
  shouldLog = process.env.NODE_ENV !== 'production'

  constructor(defaultMeta?: object) {
    this.logger = winston.createLogger({
      format: format.combine(format.timestamp(), format.json()),
      defaultMeta: defaultMeta,
      transports: [new transports.Console()],
    })
  }

  log(callback: () => void) {
    if (this.shouldLog) {
      callback()
    }
  }

  info(message: string) {
    this.log(() => this.logger.info(message))
  }

  error(message: string) {
    this.log(() => this.logger.error(message))
  }

  warn(message: string) {
    this.log(() => this.logger.warn(message))
  }

  http(message: string) {
    this.log(() => this.logger.http(message))
  }

  verbose(message: string) {
    this.log(() => this.logger.verbose(message))
  }

  debug(message: string) {
    this.log(() => this.logger.debug(message))
  }
}

export default Logger
