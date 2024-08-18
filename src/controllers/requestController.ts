import { Request, Response } from "express";
import requestService from "../services/requestService";

const getRequests = async (req: Request, res: Response) => {
    try {
        const requests = await requestService.listRequests();
        res.json({ data: requests });
    } catch (err) {
        res.json({ message: err });
    }
};

export default { getRequests };
