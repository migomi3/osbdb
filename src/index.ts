import express from "express";
import { config } from "./config.js";

const app = express();

app.use("/app", express.static("./src/app"))

app.listen(config.api.port);