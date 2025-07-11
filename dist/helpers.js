export function respondWithJson(res, payload, code = 200) {
    res.set("Content-Type", "application/json");
    res.status(code).send(JSON.stringify(payload));
    res.end();
}
export function respondWithError(res, message, code) {
    respondWithJson(res, { error: message }, code);
}
