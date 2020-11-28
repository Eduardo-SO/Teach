import { Router } from 'express'

import CreateTestService from '../services/CreateTestService'
import FindTestQuestionsService from '../services/FindTestQuestionsService'

const testsRouter = Router()

testsRouter.post('/', async (request, response) => {
  const { student_id } = request.body

  try {
    const createTestService = new CreateTestService()

    const test = await createTestService.execute({ student_id })

    return response.json(test)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

testsRouter.post('/questions', async (request, response) => {
  const { questions_id } = request.body

  try {
    const findTestQuestionsService = new FindTestQuestionsService()

    const questions = await findTestQuestionsService.execute({ questions_id })

    return response.json(questions)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default testsRouter

//
