import { Response } from "express";

export function respondWithJson(res: Response, payload: any, code = 200) {
    res.set("Content-Type", "application/json");
    res.status(code).send(JSON.stringify(payload));
    res.end();
}

export function respondWithError(res: Response, message: string, code: number) {
    respondWithJson(res, { error: message }, code);
}