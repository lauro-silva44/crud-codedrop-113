import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categories, Videos } from "./migration";
import { Video, User, Category } from "./entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alvinho",
  password: "",
  database: "vehicle_agency",
  synchronize: true,
  logging: false,
  entities: [User, Video, Category],
  migrations: [Categories, Videos],
  subscribers: [],
});
