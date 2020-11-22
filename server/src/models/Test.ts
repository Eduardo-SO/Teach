import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('tests')
class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string

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

  @Column(CreateDateColumn)
  created_at: Date

  @Column(UpdateDateColumn)
  updated_at: Date
}

export default Test
