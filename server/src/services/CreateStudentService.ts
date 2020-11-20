import Student from '../models/Student'

import StudentsRepository from '../repositories/StudentsRepository'

interface Request {
  name: string
  email: string
}

class CreateStudentService {
  private studentsRepository: StudentsRepository

  constructor(studentsRepository: StudentsRepository) {
    this.studentsRepository = studentsRepository
  }

  public execute({ name, email }: Request): Student {
    const findStudentWithSameEmail = this.studentsRepository.findByEmail(email)

    if (findStudentWithSameEmail) {
      throw new Error('An account with this email already exists')
    }

    const student = this.studentsRepository.create({
      name,
      email,
    })

    return student
  }
}

export default CreateStudentService
