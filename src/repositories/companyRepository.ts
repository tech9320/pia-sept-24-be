import Company, { ICompany } from "../models/companyModel";

const createCompany = async (data: ICompany) => {
    const user = new Company(data);
    return await user.save();
};

const getAllCompanies = async () => {
    const result = await Company.find({});

    return result;
};

const getCompany = async (id: string) => {
    return await Company.findOne({ _id: id });
};

export default { createCompany, getAllCompanies, getCompany };
