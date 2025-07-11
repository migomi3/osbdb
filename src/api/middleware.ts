import { NextFunction, Request, Response } from "express";
import { config } from "../config.js";

export function middlewareMetricsInc(req: Request, res: Response, next: NextFunction) {
    config.api.fileServerHits++;
    next();
}

export function middlewareLogging(req: Request, res: Response, next: NextFunction) {
    res.on("finish", () => {
        if (res.statusCode < 200 || 299 < res.statusCode) {
            console.log(`[NON-OK] ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }        
    });
    next();
}
