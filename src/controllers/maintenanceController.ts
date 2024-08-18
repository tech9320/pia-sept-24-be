import { Request, Response } from "express";
import maintenanceService from "../services/maintenanceService";

const getMainenances = async (req: Request, res: Response) => {
    try {
        const mainenances = await maintenanceService.listMainenances();
        res.json({ data: mainenances });
    } catch (err) {
        res.json({ message: err });
    }
};

export default { getMainenances };
