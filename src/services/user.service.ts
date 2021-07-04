import { IUserRepository } from '../data/respositories/user.repository'

export interface IUserService {
  get(): object
}

export class UserService {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async get() {
    return await this.userRepository.find()
  }
}
