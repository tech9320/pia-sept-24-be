import express from "express";
import cors from "cors";

import config from "./config/env.config";

import connectDB from "./config/database.config";
import populateDB from "./data/populateDB";
import mongoose from "mongoose";
import ownerController from "./controllers/ownerController";
import loginController from "./controllers/loginController";
import companyController from "./controllers/companyController";
import workerController from "./controllers/workerController";
import checkController from "./controllers/checkController";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Populate database once connection is established
mongoose.connection.once("open", async () => {
    await populateDB();
});

// Routes
app.get("/owner", ownerController.getOwners);
app.get("/owner/count", ownerController.getOwnerCount);
app.get("/worker", workerController.getWorkers);
app.get("/worker/count", workerController.getWorkerCount);
app.get("/company", companyController.getCompanies);
app.get("/login/user", loginController.loginUser);
app.get("/login/admin", loginController.loginAdmin);
app.get("/check/email", checkController.checkUniqueForEmail);
app.get("/check/username", checkController.checkUniqueForUsername);

// Start server
app.listen(config.BACKEND_PORT, async () => {
    console.log(`Backend server running on port ${config.BACKEND_PORT}`);
});
