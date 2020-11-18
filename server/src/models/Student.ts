import { v4 as uuid } from 'uuid'

class Student {
  id: string

  name: string

  email: string

  constructor({ name, email }: Omit<Student, 'id'>) {
    this.id = uuid()
    this.name = name
    this.email = email
  }
}

export default Student
