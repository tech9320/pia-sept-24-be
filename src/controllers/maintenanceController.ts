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
        await maintenanceService.addMaintenance(
            requestId,
            companyId,
            __status__
        );
        res.json({ status: "ok", message: "saved" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const updateMaintenance = async (req: Request, res: Response) => {
    let { requestId, maintenanceId, workerId, __status__, date } = req.body;

    try {
        await maintenanceService.updateMaintenances(
            requestId,
            maintenanceId,
            workerId,
            __status__,
            date
        );
        res.json({ status: "ok", message: "saved" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

export default { getMainenances, requestMaintenance, updateMaintenance };
