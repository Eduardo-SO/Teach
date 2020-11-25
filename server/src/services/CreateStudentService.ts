import { getCustomRepository } from 'typeorm'

import Student from '../models/Student'
import StudentsRepository from '../repositories/StudentsRepository'

interface Request {
  name: string
  email: string
}

class CreateStudentService {
  public async execute({ name, email }: Request): Promise<Student> {
    const studentsRepository = getCustomRepository(StudentsRepository)

    const studentWithSameEmail = await studentsRepository.findByEmail(email)

    if (studentWithSameEmail) {
      return studentWithSameEmail
    }

    const student = studentsRepository.create({
      name,
      email,
    })

    await studentsRepository.save(student)

    return student
  }
}

export default CreateStudentService
