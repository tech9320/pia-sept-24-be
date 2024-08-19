import { ICompany } from "../models/companyModel";
import companyRepository from "../repositories/companyRepository";
import maintenanceService from "./maintenanceService";
import requestService from "./requestService";
import workerService from "./workerService";

const addCompany = async (companyData: ICompany) => {
    return await companyRepository.createCompany(companyData);
};

const listCompanies = async () => {
    return await companyRepository.getAllCompanies();
};

const getCompany = async (id: string) => {
    return await companyRepository.getCompany(id);
};

const isAnyWorkerAvailable = async (companyId: any, date: any) => {
    const companyWorkers = await workerService.listWorkersOfCompany(companyId);

    for (const worker of companyWorkers) {
        const workingOnRequest =
            await requestService.isWorkerWorkingOnGivenDate(worker._id, date);
        const workingOnMaintenance =
            await maintenanceService.isWorkerWorkingOnGivenDate(
                worker._id,
                date
            );

        if (!workingOnRequest && !workingOnMaintenance) {
            return true;
        }
    }

    return false;
};

export default { addCompany, listCompanies, getCompany, isAnyWorkerAvailable };
