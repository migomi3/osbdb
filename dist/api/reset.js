import { config } from "../config.js";
import { respondWithJson } from "../helpers.js";
export async function handlerReset(req, res) {
    config.api.fileServerHits = 0;
    respondWithJson(res, "Data Reset");
}
