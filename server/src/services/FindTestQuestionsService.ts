import { getRepository } from 'typeorm'
import Question from '../models/Question'

interface Request {
  questions_id: string
}

class FindTestQuestionsService {
  public async execute({ questions_id }: Request): Promise<Question[]> {
    const questionsRepository = getRepository(Question)

    const questionsIdToArray = questions_id.split(',')

    const questions = await questionsRepository.findByIds(questionsIdToArray)

    return questions
  }
}

export default FindTestQuestionsService
