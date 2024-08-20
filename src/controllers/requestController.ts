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
        __status__,
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
        __status__,
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

const updateRequestStatus = async (req: Request, res: Response) => {
    let { requestId, workerId, __status__ } = req.body;

    try {
        await requestService.updateRequestStatus(
            requestId,
            workerId,
            __status__
        );
        res.json({ status: "ok", message: "updated" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

export default { getRequests, createRequest, updateRequestStatus };
