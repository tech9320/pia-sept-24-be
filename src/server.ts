import express from "express";
import cors from "cors";

import connectDB from "./config/database.config";
import populateDB from "./data/populateDB";
import mongoose from "mongoose";
import ownerController from "./controllers/ownerController";
import loginController from "./controllers/loginController";
import companyController from "./controllers/companyController";
import workerController from "./controllers/workerController";
import checkController from "./controllers/checkController";
import passwordController from "./controllers/passwordController";
import requestController from "./controllers/requestController";
import maintenanceController from "./controllers/maintenanceController";

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
app.post("/owner", ownerController.createOwner);
app.get("/owner/count", ownerController.getOwnerCount);
app.put("/owner/deactivate", ownerController.deactivateOwner);
app.put("/owner", ownerController.updateOwner);
app.put("/owner/status", ownerController.updateOwnerStatus);
app.get("/worker", workerController.getWorkers);
app.get("/worker/count", workerController.getWorkerCount);
app.put("/worker/deactivate", workerController.deactivateWorker);
app.put("/worker", workerController.updateWorker);
app.post("/worker", workerController.createWorker);
app.get("/company", companyController.getCompanies);
app.get("/login/user", loginController.loginUser);
app.get("/login/admin", loginController.loginAdmin);
app.get("/check/email", checkController.checkUniqueForEmail);
app.get("/check/username", checkController.checkUniqueForUsername);
app.put("/password/update", passwordController.updatePassword);
app.get("/request", requestController.getRequests);
app.get("/maintenance", maintenanceController.getMainenances);

// Start server
app.listen(4000, async () => {
    console.log(`Backend server running on port ${4000}`);
});
