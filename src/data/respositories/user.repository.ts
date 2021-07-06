import { Model, Types } from 'mongoose'
import { IUser } from '../models/user.model'
import { BaseRepository, IBaseRepository } from './base.repository'

export interface IUserRepository extends IBaseRepository<IUser> {
  create(createDTO: CreateDTO): Promise<IUser>
  updateOne(updateDTO: UpdateDTO): Promise<void>
  deleteOne(id: Types.ObjectId): Promise<void>
}

export interface CreateDTO {
  name: string
  email: string
  password: string
}

export interface UpdateDTO {
  id: Types.ObjectId
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
  }

  async create(createDTO: CreateDTO): Promise<IUser> {
    const user = await this.model.create(createDTO)
    return user
  }

  async updateOne(updateDTO: UpdateDTO): Promise<void> {
    const { id, ...data } = updateDTO
    await this.model.updateOne({ _id: id }, data)
  }

  async deleteOne(id: Types.ObjectId): Promise<void> {
    await this.model.deleteOne({ _id: id })
  }
}
