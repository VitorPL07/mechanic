import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675038776944 implements MigrationInterface {
    name = 'default1675038776944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mechanic" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e5c0ee12979b592454734019732" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL, "vehicle" character varying NOT NULL, "client" character varying NOT NULL, "price" integer NOT NULL, "mechanic_id" uuid NOT NULL, "components" json NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_bc017795cac211f37b47afa6dab" FOREIGN KEY ("mechanic_id") REFERENCES "mechanic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_bc017795cac211f37b47afa6dab"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "mechanic"`);
    }

}
