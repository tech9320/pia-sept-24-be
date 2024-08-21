import { Request, Response } from "express";
import companyService from "../services/companyService";

const createCompany = async (req: Request, res: Response) => {
    let {
        name,
        address,
        services,
        contactNumber,
        mapCoordinates,
        vacationPeriod,
    } = req.body;

    try {
        const company = await companyService.addCompany(
            name,
            address,
            services,
            contactNumber,
            mapCoordinates,
            vacationPeriod
        );
        console.log(company);

        res.json({ message: "ok", data: company });
    } catch (err) {
        res.json({ message: "error", data: err });
    }
};

const getCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await companyService.listCompanies();
        res.json({ data: companies });
    } catch (err) {
        res.json({ message: err });
    }
};

const isAnyWorkerAvailable = async (req: Request, res: Response) => {
    const companyId = req.query.companyId;
    const date = new Date(req.query.date as string);

    try {
        const result = await companyService.isAnyWorkerAvailable(
            companyId,
            date
        );
        res.json({ message: "ok", data: result });
    } catch (err) {
        res.json({ message: "error", data: err });
    }
};

export default { createCompany, getCompanies, isAnyWorkerAvailable };
