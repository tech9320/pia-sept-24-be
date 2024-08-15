import { Request, Response } from "express";
import workerService from "../services/workerService";

const createWorker = async (req: Request, res: Response) => {
    // try {
    //     const user = await userService.addUser(req.body);
    //     res.status(201).json(user);
    // } catch (err) {
    //     res.status(400).json({ message: err });
    // }
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

export default { createWorker, getWorkers, getWorkerCount };
