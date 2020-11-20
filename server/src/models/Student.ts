import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('students')
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string
}

export default Student
