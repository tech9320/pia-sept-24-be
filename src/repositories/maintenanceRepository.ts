import Maintenance from "../models/maintenanceModel";
import RequestM from "../models/requestModel";

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

const updateMaintenances = async (
    requestId: string,
    maintenanceId: string,
    workerId: string,
    __status__: string,
    date: string
) => {
    try {
        if (__status__ === "approve") {
            let result = await RequestM.updateMany(
                { _id: requestId },
                {
                    workerId: workerId,
                    __status__: __status__,
                    lastMaintenanceAt: date,
                }
            );

            result = await Maintenance.updateMany(
                { _id: maintenanceId },
                {
                    workerId: workerId,
                    __status__: __status__,
                    completedAt: date,
                }
            );

            return result;
        } else {
            let result = await Maintenance.updateMany(
                { _id: maintenanceId },
                { workerId: workerId, __status__: __status__ }
            );

            return result;
        }
    } catch {
        return undefined;
    }
};

export default {
    getAllMainenances,
    isWorkerWorkingOnGivenDate,
    createMaintenance,
    updateMaintenances,
};
