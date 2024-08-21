import Company from "../models/companyModel";

const createCompany = async (
    name: string,
    address: string,
    services: any,
    contactNumber: string,
    mapCoordinates: any,
    vacationPeriod: any
) => {
    const company = new Company({
        name: name,
        address: address,
        services: services.services,
        contactNumber: contactNumber,
        mapCoordinates: mapCoordinates.coordinates,
        vacationPeriod: vacationPeriod,
    });

    return await company.save();
};

const getAllCompanies = async () => {
    const result = await Company.find({});

    return result;
};

const getCompany = async (id: string) => {
    return await Company.findOne({ _id: id });
};

export default { createCompany, getAllCompanies, getCompany };
