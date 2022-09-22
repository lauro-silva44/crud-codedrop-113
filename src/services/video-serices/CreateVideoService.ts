import { Category } from "./../../entity/Category";
import { AppDataSource } from "./../../data-source";
import { Video } from "../../entity";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Video | Error> {
    const videoRepo = AppDataSource.getRepository(Video);
    const categoryRepo = AppDataSource.getRepository(Category);

    if (!(await categoryRepo.findOneBy({ id: category_id }))) {
      return new Error("CATEGORY DOES NOT EXIST");
    }

    const video = videoRepo.create({
      name,
      description,
      duration,
      category_id,
    });
    await videoRepo.save(video);

    return video;
  }
}
