import express = require("express");
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

//data source initialization
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

//puttind server ative, in port 3000
app.listen(3000, () => console.log("SEVER IS ALIVEEEE!!"));
