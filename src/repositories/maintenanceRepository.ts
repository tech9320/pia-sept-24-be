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

export default { getAllMainenances, isWorkerWorkingOnGivenDate };
