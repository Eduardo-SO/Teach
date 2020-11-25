import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('questions')
class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  question: string

  @Column()
  answers: string

  @Column()
  correct_answer: string

  @Column(CreateDateColumn)
  created_at: Date

  @Column(UpdateDateColumn)
  updated_at: Date
}

export default Question
