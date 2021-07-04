import { UserController } from './http/controllers/user.controller'
import { UserService } from './services/user.service'

export class Container {
  static services = {
    user: new UserService(),
  }

  static controllers = {
    user: new UserController(Container.services.user),
  }
}
