import { Category } from "./../../entity/Category";
import { AppDataSource } from "./../../data-source";

export class GetAllCatergoriesServices {
  async execute() {
    const repo = AppDataSource.getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}
