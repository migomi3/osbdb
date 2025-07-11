import express from "express";
import { config } from "./config.js";
import { handlerMetrics } from "./api/metrics.js";
import { middlewareLogging, middlewareMetricsInc } from "./api/middleware.js";
import { handlerReset } from "./api/reset.js";

const app = express();

app.use(middlewareLogging)
app.use("/app", middlewareMetricsInc, express.static("./src/app"))

app.get("/admin/metrics", (req, res, next) => {
    Promise.resolve(handlerMetrics(req, res)).catch(next);
})

app.post("/admin/reset", (req, res, next) => {
    Promise.resolve(handlerReset(req, res)).catch(next);
})

app.listen(config.api.port);