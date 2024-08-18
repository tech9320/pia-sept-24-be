import maintenanceRepository from "../repositories/maintenanceRepository";

const listMainenances = async () => {
    return await maintenanceRepository.getAllMainenances();
};

export default { listMainenances };
