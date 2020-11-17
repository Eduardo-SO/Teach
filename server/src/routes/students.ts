import { Router } from 'express'
import { v4 as uuid } from 'uuid'

const studentsRouter = Router()

studentsRouter.post('/', (request, response) => {
  const { name, email } = request.body

  return response.json({
    id: uuid(),
    name,
    email,
  })
})

export default studentsRouter
