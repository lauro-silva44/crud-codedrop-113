import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from "typeorm";

export class CreateVideos1663785612546 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "videos",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "category_id",
            type: "uuid",
          },
          {
            name: "duration",
            type: "numeric",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "videos",
      new TableForeignKey({
        name: "fk_videos_category",
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        onDelete: "CASCADE",
      })
    );
    await queryRunner.createIndex(
      "videos",
      new TableIndex({ name: "IDX_VIDEOS", columnNames: ["name"] })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable("videos");
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("category_id") !== -1
    );
    await queryRunner.dropForeignKey("videos", foreignKey);
    await queryRunner.dropColumn("videos", "category_id");
    await queryRunner.dropTable("videos");
  }
}
