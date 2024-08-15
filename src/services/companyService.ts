import { ICompany } from "../models/companyModel";
import companyRepository from "../repositories/companyRepository";

const addCompany = async (companyData: ICompany) => {
    return await companyRepository.createCompany(companyData);
};

const listCompanies = async () => {
    return await companyRepository.getAllCompanies();
};

const getCompany = async (id: string) => {
    return await companyRepository.getCompany(id);
};

export default { addCompany, listCompanies, getCompany };
