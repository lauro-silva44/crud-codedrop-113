import { CreateVideoController } from "./controller/video-controllers/CreateVideoController";
import { UpdateCategoryController } from "./controller/category-controllers/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category-controllers/DeleteCategoryController";
import { Router } from "express";
import { CreateCategoryController } from "./controller/category-controllers/CreateCategoryController";
import { GetAllCatergoriesController } from "./controller/category-controllers/GetAllCategoriesController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCatergoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

//videos

routes.post("/videos", new CreateVideoController().handle);

export { routes };
