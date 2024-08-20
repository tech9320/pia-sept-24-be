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

const aggMaintenance = async (
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

export default {
    listMainenances,
    isWorkerWorkingOnGivenDate,
    aggMaintenance,
};
