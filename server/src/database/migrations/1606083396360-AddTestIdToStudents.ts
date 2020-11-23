import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export default class AddTestIdToStudents1606083396360
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'students',
      new TableColumn({
        name: 'test_id',
        type: 'uuid',
        isNullable: true,
      }),
    )

    await queryRunner.createForeignKey(
      'students',
      new TableForeignKey({
        name: 'studentTests',
        columnNames: ['test_id'],
        referencedTableName: 'tests',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('students', 'studentTests')

    await queryRunner.dropColumn('students', 'test_id')
  }
}
