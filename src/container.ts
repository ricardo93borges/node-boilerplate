import { User } from './data/models/user.model'
import { UserRepository } from './data/repositories/user.repository'
import { UserController } from './http/controllers/user.controller'
import { UserService } from './services/user.service'

export class Container {
  static models = {
    user: User,
  }

  static repositories = {
    userRepository: new UserRepository(Container.models.user),
  }

  static services = {
    user: new UserService(Container.repositories.userRepository),
  }

  static controllers = {
    user: new UserController(Container.services.user),
  }
}
