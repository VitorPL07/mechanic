import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675043383567 implements MigrationInterface {
    name = 'default1675043383567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mechanic" DROP CONSTRAINT "FK_fe00754cabdc24899d10387cebe"`);
        await queryRunner.query(`ALTER TABLE "mechanic" DROP COLUMN "orderId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mechanic" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "mechanic" ADD CONSTRAINT "FK_fe00754cabdc24899d10387cebe" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
