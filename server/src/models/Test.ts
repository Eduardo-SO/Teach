import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

import Student from './Student'

@Entity('tests')
class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  student_id: string

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student

  @Column()
  grade: number

  @Column(CreateDateColumn)
  created_at: Date

  @Column(UpdateDateColumn)
  updated_at: Date
}

export default Test
