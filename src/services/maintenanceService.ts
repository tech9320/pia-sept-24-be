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

export default { listMainenances, isWorkerWorkingOnGivenDate };
