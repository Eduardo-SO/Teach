import { getRepository } from 'typeorm'
import Question from '../models/Question'

interface Request {
  id: string
}

class CreateQuestionService {
  public async execute({ id }: Request): Promise<Question> {
    const questionsRepository = getRepository(Question)

    const question = await questionsRepository.findOne({ where: { id } })

    if (!question) {
      throw new Error('This question does not exist')
    }

    await questionsRepository.remove(question)

    return question
  }
}

export default CreateQuestionService
