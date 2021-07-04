import Joi, { Schema } from 'joi'

export const getSchema: Schema = Joi.object().keys({
  params: {
    id: Joi.number().optional(),
  },
})
