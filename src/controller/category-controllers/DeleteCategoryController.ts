import { DeleteCategoryService } from "./../../services/category-services/DeleteCategoryService";
import { Request, Response } from "express";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteCategoryService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(204).end();
  }
}
