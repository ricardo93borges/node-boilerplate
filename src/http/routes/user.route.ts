import { Express, Request, Response } from 'express'
import { IRoute } from '.'
import { IUserController } from '../controllers/user.controller'
import schemaValidator from '../middleware/schema-validator.middleware'
import { getSchema } from '../schemas/user.schema'

export class UserRoute implements IRoute {
  app: Express
  userController: IUserController

  constructor(app: Express, userController: IUserController) {
    this.userController = userController
    this.app = app
  }

  setup() {
    this.app
      .get(
        '/users/:id?',
        schemaValidator(getSchema),
        (req: Request, res: Response) => {
          const response = this.userController.get()
          res.send(response)
        }
      )
      .post('/users', (req: Request, res: Response) => {})
      .put('/users/:id', (req: Request, res: Response) => {})
      .delete('/users/:id', (req: Request, res: Response) => {})
  }
}
