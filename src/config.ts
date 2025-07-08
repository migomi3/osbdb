process.loadEnvFile()

type Config = {
    api: APIConfig;
}

type APIConfig = {
    port: number;
}

export const config: Config = {
    api: {
        port: Number(envOrThrow("PORT"))
    }
}

//I wanted to put this in the helpers.ts file but apperently the compilation
//order is stupid so for now this will live here.
//For more details, time travel to when I'm writing this as I'm
//not gonna remember logic behind this shit by the time it matters
function envOrThrow(key: string) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
}