import { IUserService } from '../../services/user.service'

export interface IUserController {
  userService: IUserService
  get(): object
}

export class UserController implements IUserController {
  userService: IUserService

  constructor(userService: IUserService) {
    this.userService = userService
  }

  get() {
    return this.userService.get()
  }

  post() {
    // TODO
  }

  update() {
    // TODO
  }

  delete() {
    // TODO
  }
}
