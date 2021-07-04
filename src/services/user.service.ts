export interface IUserService {
  get(): object
}

export class UserService {
  constructor() {}

  get() {
    return { id: 1, name: 'first user' }
  }
}
