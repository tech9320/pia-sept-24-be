import Maintenance from "../models/maintenanceModel";

const getAllMainenances = async () => {
    return await Maintenance.find({});
};

const isWorkerWorkingOnGivenDate = async (workerId: string, date: Date) => {
    const result = await Maintenance.exists({
        workerId: workerId,
        completedAt: date,
    });

    if (result == null) {
        return false;
    }
    return true;
};

const createMaintenance = async (
    requestId: string,
    companyId: string,
    __status__: string
) => {
    const maintenance = new Maintenance({
        requestId: requestId,
        companyId: companyId,
        __status__,
    });
    return maintenance.save();
};

export default {
    getAllMainenances,
    isWorkerWorkingOnGivenDate,
    createMaintenance,
};
