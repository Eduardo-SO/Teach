import { Router } from 'express'

import CreateTestService from '../services/CreateTestService'

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

export default testsRouter

//
