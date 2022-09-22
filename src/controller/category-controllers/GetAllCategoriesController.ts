import { GetAllCatergoriesServices } from "./../../services/category-services/GetAllCatergoriesServices";
import { Request, Response } from "express";

export class GetAllCatergoriesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllCatergoriesServices();

    const categories = await service.execute();

    return response.json(categories);
  }
}
