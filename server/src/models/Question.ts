import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

import Test from './Test'

@Entity('tests')
class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  test_id: string

  @ManyToOne(() => Test)
  @JoinColumn({ name: 'test_id' })
  test: Test

  @Column()
  question: string

  @Column()
  answer_1: string

  @Column()
  answer_2: string

  @Column()
  answer_3: string

  @Column()
  answer_4: string

  @Column()
  correct_answer: string

  @Column(CreateDateColumn)
  created_at: Date

  @Column(UpdateDateColumn)
  updated_at: Date
}

export default Question
