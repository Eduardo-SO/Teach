import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('students')
class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column(CreateDateColumn)
  created_at: Date

  @Column(UpdateDateColumn)
  updated_at: Date
}

export default Student
