import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";

const app = express();
app.use(cors());
app.use(express.json());

// Establish connection to database
mongoose.connect("mongodb://127.0.0.1:27017/backend_db");

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("db connection ok");
});

// Start listening on port 4000
app.listen(config.BACKEND_PORT, () =>
    console.log(`Backend server running on port ${config.BACKEND_PORT}`)
);

// Test GET route
app.get("/test", (_, res) => res.send("Backend works!"));
