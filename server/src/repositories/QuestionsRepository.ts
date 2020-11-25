import { EntityRepository, Repository } from 'typeorm'
import Question from '../models/Question'

@EntityRepository(Question)
class QuestionsRepository extends Repository<Question> {
  public async findTen(): Promise<Question[]> {
    const questions = await this.find({ take: 10 })

    return questions
  }
}

export default QuestionsRepository
