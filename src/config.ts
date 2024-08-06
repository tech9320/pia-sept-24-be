import dotenv from "dotenv";

// Use .env file
dotenv.config();

interface Config {
    BACKEND_PORT: number;
}

const getConfig = (): Config => {
    return {
        BACKEND_PORT: parseInt(process.env.BACKEND_PORT || "4000", 10),
    };
};

const config = getConfig();

export default config;
