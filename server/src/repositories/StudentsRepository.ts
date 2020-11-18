import Student from '../models/Student'

interface CreateStudentDTO {
  name: string
  email: string
}

class StudentsRepository {
  private students: Student[]

  constructor() {
    this.students = []
  }

  public findAll(): Student[] {
    return this.students
  }

  public findByEmail(email: string): Student | null {
    const findStudent = this.students.find(student => student.email === email)

    return findStudent || null
  }

  public create({ name, email }: CreateStudentDTO): Student {
    const student = new Student({
      name,
      email,
    })

    this.students.push(student)

    return student
  }
}

export default StudentsRepository
