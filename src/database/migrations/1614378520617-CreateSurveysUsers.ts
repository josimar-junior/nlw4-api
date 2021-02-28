import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveysUsers1614378520617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'surveys_users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'survey_id',
                        type: 'uuid'
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'value',
                        type: 'number',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKSurvey',
                        referencedTableName: 'surveys',
                        referencedColumnNames: ['id'],
                        columnNames: ['survey_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('surveys_users');
    }

}
