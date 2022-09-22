import { Category } from "./../../entity/Category";
import { AppDataSource } from "./../../data-source";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Category);

    if (!(await repo.findOneBy({ id }))) {
      return new Error("CATEGORY DOES NOT EXIST!");
    }

    await repo.delete(id);
  }
}
