import { NextFunction, Request, Response } from 'express'
import { Schema } from 'joi'

const schemaValidator = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req, {
      allowUnknown: true,
    })

    if (error) {
      return res.status(400).send(error.details)
    }

    next()
  }
}

export default schemaValidator
