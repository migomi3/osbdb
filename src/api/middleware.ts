import { NextFunction, Request, Response } from "express";
import { config } from "../config.js";
import { respondWithError } from "../helpers.js";
import { BadRequestError, ForbiddenError, NotFoundError, UserNotAuthenticatedError } from "./errors.js";

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

export function middlewareErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    switch (err.constructor) {
        case BadRequestError:
            respondWithError(res, err.message, 400);
            break;
        case UserNotAuthenticatedError:
            respondWithError(res, err.message, 401);
            break;
        case ForbiddenError:
            respondWithError(res, err.message, 403);
            break;
        case NotFoundError:
            respondWithError(res, err.message, 404);
            break;
        default:
            console.log(err.message)
            respondWithError(res, "Something went wrong on our end", 500);
    }
}