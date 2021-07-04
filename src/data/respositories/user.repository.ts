import { Model } from 'mongoose'
import { IUser } from '../models/user.model'
import { BaseRepository, IBaseRepository } from './base.repository'

export interface IUserRepository extends IBaseRepository<IUser> {
  create(createDTO: CreateDTO): Promise<IUser>
}

export interface CreateDTO {
  name: string
  email: string
  password: string
}

export class UserRepository
  extends BaseRepository<IUser>
  implements IUserRepository
{
  constructor(model: Model<IUser>) {
    super(model)
    this.model = model
  }

  async create(createDTO: CreateDTO): Promise<IUser> {
    const user = await this.model.create(createDTO)
    return user
  }
}
