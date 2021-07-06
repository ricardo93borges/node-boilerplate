import { Chance } from 'chance'
import { model, Schema, Document } from 'mongoose'
import { BaseRepository } from '../../../src/data/repositories/base.repository'

const chance = new Chance()

describe('BaseRepository', () => {
  interface ITestModel extends Document {}
  const testSchema = new Schema({})

  const TestModel = model('User', testSchema)
  class TestRepository extends BaseRepository<ITestModel> {}

  let testRepository: TestRepository

  beforeEach(() => {
    testRepository = new TestRepository(TestModel)
  })

  describe('#find', () => {
    it('should call find() from model ', async () => {
      TestModel.find = jest.fn().mockResolvedValue([{}])

      await testRepository.find()

      expect(TestModel.find).toBeCalledTimes(1)
    })

    it('should call findOne() from model ', async () => {
      TestModel.findById = jest.fn().mockResolvedValue({})
      const id = chance.string({ numeric: true })
      await testRepository.findById(id)

      expect(TestModel.findById).toBeCalledTimes(1)
    })
  })
})
