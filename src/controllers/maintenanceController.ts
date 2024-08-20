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

const requestMaintenance = async (req: Request, res: Response) => {
    let { requestId, companyId, __status__ } = req.body;

    try {
        await maintenanceService.aggMaintenance(
            requestId,
            companyId,
            __status__
        );
        res.json({ status: "ok", message: "saved" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

export default { getMainenances, requestMaintenance };
