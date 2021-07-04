import { Express } from 'express'
import { Container } from '../../container'
import { UserRoute } from './user.route'

export interface IRoute {
  app: Express
  setup(): void
}

export function initRoutes(app: Express) {
  const userRoute = new UserRoute(app, Container.controllers.user)
  userRoute.setup()
}
