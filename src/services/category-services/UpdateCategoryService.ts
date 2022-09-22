import { Category } from "./../../entity/Category";
import { AppDataSource } from "../../data-source";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    const categoryRepo = AppDataSource.getRepository(Category);

    const category = await categoryRepo.findOneBy({ id });

    if (!category) {
      return new Error("SORRY, CATEGORY DOES NOT EXIST");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await categoryRepo.save(category);

    return category;
  }
}
