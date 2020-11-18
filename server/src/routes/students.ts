import { Router } from 'express'

import StudentsRepository from '../repositories/StudentsRepository'

const studentsRouter = Router()
const studentsRepository = new StudentsRepository()

studentsRouter.get('/', (request, response) => {
  const students = studentsRepository.findAll()

  return response.json(students)
})

studentsRouter.post('/', (request, response) => {
  const { name, email } = request.body

  const findStudentWithSameEmail = studentsRepository.findByEmail(email)

  if (findStudentWithSameEmail) {
    return response
      .status(400)
      .json({ error: 'An account with this email already exists' })
  }

  const student = studentsRepository.create({
    name,
    email,
  })

  return response.json(student)
})

export default studentsRouter
