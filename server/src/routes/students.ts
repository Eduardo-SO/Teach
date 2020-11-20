import { Router } from 'express'
import { getCustomRepository } from 'typeorm'

import StudentsRepository from '../repositories/StudentsRepository'
import CreateStudentService from '../services/CreateStudentService'

const studentsRouter = Router()

studentsRouter.get('/', async (request, response) => {
  const studentsRepository = getCustomRepository(StudentsRepository)

  const students = await studentsRepository.find()

  return response.json(students)
})

studentsRouter.post('/', async (request, response) => {
  const { name, email } = request.body

  try {
    const createStudent = new CreateStudentService()

    const student = await createStudent.execute({ name, email })

    return response.json(student)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default studentsRouter
