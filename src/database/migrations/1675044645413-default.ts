import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675044645413 implements MigrationInterface {
    name = 'default1675044645413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "price" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "price" integer NOT NULL`);
    }

}
