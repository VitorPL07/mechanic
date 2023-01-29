import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1674873103227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'order',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                    },
                    {
                        name: 'vehicle',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'client',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'price',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'mechanic_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'components',
                        type: 'json',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_order_mechanic',
                        columnNames: ['mechanic_id'],
                        referencedTableName: 'mechanic',
                        referencedColumnNames: ['id']
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order');
    }

}
