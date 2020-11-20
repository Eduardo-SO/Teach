import { Router } from 'express'

import StudentsRepository from '../repositories/StudentsRepository'
import CreateStudentService from '../services/CreateStudentService'

const studentsRouter = Router()
const studentsRepository = new StudentsRepository()

studentsRouter.get('/', (request, response) => {
  const students = studentsRepository.findAll()

  return response.json(students)
})

studentsRouter.post('/', (request, response) => {
  const { name, email } = request.body

  try {
    const createStudent = new CreateStudentService(studentsRepository)

    const student = createStudent.execute({ name, email })

    return response.json(student)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default studentsRouter
