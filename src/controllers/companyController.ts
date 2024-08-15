import { Request, Response } from "express";
import companyService from "../services/companyService";

const createCompany = async (req: Request, res: Response) => {
    // try {
    //     const user = await userService.addUser(req.body);
    //     res.status(201).json(user);
    // } catch (err) {
    //     res.status(400).json({ message: err });
    // }
};

const getCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await companyService.listCompanies();
        res.json({ data: companies });
    } catch (err) {
        res.json({ message: err });
    }
};

export default { createCompany, getCompanies };
