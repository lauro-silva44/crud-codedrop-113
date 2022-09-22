import { AppDataSource } from "../../data-source";
import { Category } from "../../entity";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const category = new Category();

    if (await repo.findOneBy({ name })) {
      return new Error("CATEGORY ALREADY EXISTIS");
    }
    category.name = name;
    category.description = description;

    await repo.save(category);
    console.log("CATEGORY SAVE SUCCESSFULLY!");
    return category;
  }
}
