import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateQuestions1606081286681
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'question',
            type: 'varchar',
          },
          {
            name: 'answer_1',
            type: 'varchar',
          },
          {
            name: 'answer_2',
            type: 'varchar',
          },
          {
            name: 'answer_3',
            type: 'varchar',
          },
          {
            name: 'answer_4',
            type: 'varchar',
          },
          {
            name: 'correct_answer',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questions')
  }
}
