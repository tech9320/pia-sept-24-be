import { Request, Response } from "express";
import requestService from "../services/requestService";
import RequestM from "../models/requestModel";

const createRequest = async (req: Request, res: Response) => {
    let {
        ownerId,
        companyId,
        workerId,
        gardenType,
        gardenArea,
        greenArea,
        poolArea,
        fountainArea,
        furnitureArea,
        furnitureNumber,
        selectedServices,
        createdAt,
        requestCompletedAt,
        lastMaintenanceAt,
    } = req.body;

    const request = new RequestM({
        ownerId,
        companyId,
        workerId,
        gardenType,
        gardenArea,
        greenArea,
        poolArea,
        fountainArea,
        furnitureArea,
        furnitureNumber,
        selectedServices,
        createdAt,
        requestCompletedAt,
        lastMaintenanceAt,
    });

    try {
        await requestService.addRequest(request);
        res.json({ status: "ok", message: "saved" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const getRequests = async (req: Request, res: Response) => {
    try {
        const requests = await requestService.listRequests();
        res.json({ data: requests });
    } catch (err) {
        res.json({ message: err });
    }
};

export default { getRequests, createRequest };
