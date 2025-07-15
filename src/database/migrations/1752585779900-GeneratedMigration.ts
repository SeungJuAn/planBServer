import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedMigration1752585779900 implements MigrationInterface {
    name = 'GeneratedMigration1752585779900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` varchar(36) NOT NULL, \`userId\` varchar(50) NOT NULL, \`name\` varchar(20) NOT NULL, \`email\` varchar(20) NOT NULL, \`password\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`User\``);
    }

}
