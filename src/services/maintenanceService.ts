import maintenanceRepository from "../repositories/maintenanceRepository";

const listMainenances = async () => {
    return await maintenanceRepository.getAllMainenances();
};

const isWorkerWorkingOnGivenDate = async (workerId: any, date: any) => {
    return await maintenanceRepository.isWorkerWorkingOnGivenDate(
        workerId,
        date
    );
};

const addMaintenance = async (
    requestId: string,
    companyId: string,
    __status__: string
) => {
    return await maintenanceRepository.createMaintenance(
        requestId,
        companyId,
        __status__
    );
};

const updateMaintenances = async (
    requestId: string,
    maintenanceId: string,
    workerId: string,
    __status__: string,
    date: string
) => {
    return await maintenanceRepository.updateMaintenances(
        requestId,
        maintenanceId,
        workerId,
        __status__,
        date
    );
};

export default {
    listMainenances,
    isWorkerWorkingOnGivenDate,
    addMaintenance,
    updateMaintenances,
};
