import dotenv from "dotenv";

// Use .env file
dotenv.config();

interface Config {
    BACKEND_PORT: number;
    SALT_VALUE: string;
}

const getConfig = (): Config => {
    return {
        BACKEND_PORT: parseInt(process.env.BACKEND_PORT || "4000", 10),
        SALT_VALUE: process.env.SALT_VALUE || "SALT_VALUE",
    };
};

const config = getConfig();

export default config;
