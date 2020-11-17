import { Router } from 'express'

import Student from '../models/Student'

const studentsRouter = Router()

studentsRouter.post('/', (request, response) => {
  const { name, email } = request.body

  const student = new Student(name, email)

  return response.json(student)
})

export default studentsRouter
