import { Router } from 'express'
import { getRepository } from 'typeorm'

import Question from '../models/Question'

import CreateQuestionService from '../services/CreateQuestionService'
import DeleteQuestionService from '../services/DeleteQuestionService'

const questionsRouter = Router()

// Cadastrar nova questão no banco
questionsRouter.post('/', async (request, response) => {
  const { question, answers, correct_answer } = request.body

  try {
    const createQuestion = new CreateQuestionService()

    const questionCreated = await createQuestion.execute({
      question,
      answers,
      correct_answer,
    })

    return response.json(questionCreated)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

questionsRouter.get('/', async (request, response) => {
  const questionsRepository = getRepository(Question)

  const selectedQuestions = await questionsRepository.find()

  return response.json(selectedQuestions)
})

questionsRouter.delete('/', async (request, response) => {
  const { id } = request.body

  try {
    const deleteQuestionService = new DeleteQuestionService()

    const question = await deleteQuestionService.execute({ id })

    return response.json(question)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default questionsRouter
