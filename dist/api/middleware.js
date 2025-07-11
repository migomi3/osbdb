import { config } from "../config.js";
export function middlewareMetricsInc(req, res, next) {
    config.api.fileServerHits++;
    next();
}
export function middlewareLogging(req, res, next) {
    res.on("finish", () => {
        if (res.statusCode < 200 || 299 < res.statusCode) {
            console.log(next.toString);
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
}
