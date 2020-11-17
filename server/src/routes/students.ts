import { Router } from 'express'

const studentsRouter = Router()

studentsRouter.post('/', (request, response) => {
  const { name, email } = request.body

  return response.json({ name, email })
})

export default studentsRouter
