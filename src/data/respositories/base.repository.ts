import { Model } from 'mongoose'

export interface IBaseRepository<T> {
  find(): Promise<T[]>
  findById(id: string): Promise<T | null>
}

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected model: Model<T>

  constructor(model: Model<T>) {
    this.model = model
  }

  async find(): Promise<T[]> {
    return await this.model.find()
  }

  async findById(id: string): Promise<T | null> {
    return await this.model.findById(id)
  }
}
