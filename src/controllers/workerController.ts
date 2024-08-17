import { Request, Response } from "express";
import workerService from "../services/workerService";
import Worker from "../models/workerModel";
import utils from "../utils";

const createWorker = async (req: Request, res: Response) => {
    let {
        username,
        password,
        name,
        surname,
        gender,
        address,
        contactNumber,
        email,
        photoBitecode,
        selectedCompany,
    } = req.body;

    if (photoBitecode == "") {
        photoBitecode = utils.encodeImageToBase64(
            "resources/images/default-avatar.png"
        );
    }

    const worker = new Worker({
        username,
        password,
        name,
        surname,
        gender,
        address,
        contactNumber,
        email,
        photoBitecode,
        company: selectedCompany,
        __status__: "active",
    });

    try {
        await workerService.addWorker(worker);
        res.json({ status: "ok", message: "saved" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const deactivateWorker = async (req: Request, res: Response) => {
    let { userId } = req.body;

    try {
        await workerService.deactivateWorker(userId);
        res.json({ status: "ok", message: "deactivated" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const getWorkers = async (req: Request, res: Response) => {
    try {
        const workers = await workerService.listWorkers();
        res.json({ data: workers });
    } catch (err) {
        res.json({ message: err });
    }
};

const getWorkerCount = async (req: Request, res: Response) => {
    try {
        const count = await workerService.countWorkers();
        res.json({ data: count });
    } catch (err) {
        res.json({ message: err });
    }
};

const updateWorker = async (req: Request, res: Response) => {
    let {
        name,
        surname,
        address,
        contactNumber,
        emailAddress,
        photoBitecode,
        userId,
    } = req.body;

    if (photoBitecode == "") {
        photoBitecode = utils.encodeImageToBase64(
            "resources/images/default-avatar.png"
        );
    }

    const worker = new Worker({
        name,
        surname,
        address,
        contactNumber,
        email: emailAddress,
        photoBitecode,
    });

    try {
        await workerService.updateWorker(worker, userId);
        res.json({ status: "ok", message: "updated" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

export default {
    createWorker,
    getWorkers,
    getWorkerCount,
    updateWorker,
    deactivateWorker,
};
