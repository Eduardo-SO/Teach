import { getRepository } from 'typeorm'
import Question from '../models/Question'

interface Request {
  question: string
  answers: string
  correct_answer: string
}

class CreateQuestionService {
  public async execute({
    question,
    answers,
    correct_answer,
  }: Request): Promise<Question> {
    const questionsRepository = getRepository(Question)

    const answersToArray = answers.split(', ')

    if (!answersToArray.includes(correct_answer)) {
      throw new Error('This answer is not included')
    }

    const createdQuestion = questionsRepository.create({
      question,
      answers,
      correct_answer,
    })

    await questionsRepository.save(createdQuestion)

    return createdQuestion
  }
}

export default CreateQuestionService
