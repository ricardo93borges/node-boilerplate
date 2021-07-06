import { Chance } from 'chance'
import { model, Model, Schema, Types } from 'mongoose'
import { IUser } from '../../../src/data/models/user.model'
import {
  CreateDTO,
  UpdateDTO,
  UserRepository,
} from '../../../src/data/respositories/user.repository'

const chance = new Chance()

describe('UserRepository', () => {
  const MockSchema = new Schema({})
  let MockModel: Model<IUser>

  beforeEach(() => {
    MockModel = model('Mock', MockSchema)
  })

  describe('#find', () => {
    it('should call create() from user model ', async () => {
      const user = {
        name: chance.string({ length: 10 }),
        email: chance.email(),
        password: chance.string({ length: 10 }),
      } as IUser

      const createDTO = {
        name: chance.string({ length: 10 }),
        email: chance.email(),
        password: chance.string({ length: 10 }),
      } as CreateDTO

      MockModel.create = jest.fn().mockResolvedValue(user)
      const userRepository = new UserRepository(MockModel)

      const result = await userRepository.create(createDTO)

      expect(MockModel.create).toBeCalledWith(createDTO)
      expect(result).toEqual(user)
    })
  })

  describe('#updateOne', () => {
    it('should call updateOne() from user model', async () => {
      const updateDTO = {
        id: new Types.ObjectId(),
        name: chance.string({ length: 5 }),
        email: chance.string({ length: 5 }),
        password: chance.string({ length: 5 }),
      } as UpdateDTO

      MockModel.updateOne = jest.fn().mockResolvedValue({})

      const userRepository = new UserRepository(MockModel)
      await userRepository.updateOne(updateDTO)

      const { id, ...data } = updateDTO
      expect(MockModel.updateOne).toBeCalledWith({ _id: id }, data)
    })
  })

  describe('#deleteOne', () => {
    it('should call deleteOne() from user model', async () => {
      const id = new Types.ObjectId()

      MockModel.deleteOne = jest.fn().mockResolvedValue({})

      const userRepository = new UserRepository(MockModel)
      await userRepository.deleteOne(id)

      expect(MockModel.deleteOne).toBeCalledWith({ _id: id })
    })
  })
})
