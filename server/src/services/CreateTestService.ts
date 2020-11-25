import { getCustomRepository, getRepository } from 'typeorm'

import Test from '../models/Test'
import QuestionsRepository from '../repositories/QuestionsRepository'
import StudentsRepository from '../repositories/StudentsRepository'

interface Request {
  student_id: string
}

class CreateTestService {
  public async execute({ student_id }: Request): Promise<Test> {
    const testsRepository = getRepository(Test)
    const questionsRepository = getCustomRepository(QuestionsRepository)
    const studentsRepository = getCustomRepository(StudentsRepository)

    const student = await studentsRepository.findOne({
      where: { id: student_id },
    })

    if (!student) {
      throw new Error('This student does not exist')
    }

    const questions = await questionsRepository.findTen()

    if (questions.length !== 10) {
      throw new Error('There are no ten questions registered')
    }

    const questionsIds = questions.map(question => question.id)

    const test = testsRepository.create({
      student_id,
      questions: questionsIds.toString(),
    })

    await testsRepository.save(test)

    return test
  }
}

export default CreateTestService
