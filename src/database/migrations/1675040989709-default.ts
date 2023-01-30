import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675040989709 implements MigrationInterface {
    name = 'default1675040989709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mechanic" DROP CONSTRAINT "FK_fe00754cabdc24899d10387cebe"`);
        await queryRunner.query(`ALTER TABLE "mechanic" RENAME COLUMN "orderId" TO "ordersId"`);
        await queryRunner.query(`ALTER TABLE "mechanic" ADD CONSTRAINT "FK_d1b451b1bb5879ff9c4a097af21" FOREIGN KEY ("ordersId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mechanic" DROP CONSTRAINT "FK_d1b451b1bb5879ff9c4a097af21"`);
        await queryRunner.query(`ALTER TABLE "mechanic" RENAME COLUMN "ordersId" TO "orderId"`);
        await queryRunner.query(`ALTER TABLE "mechanic" ADD CONSTRAINT "FK_fe00754cabdc24899d10387cebe" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
