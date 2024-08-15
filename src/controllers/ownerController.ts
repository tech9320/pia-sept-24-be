import { Request, Response } from "express";
import ownerService from "../services/ownerService";

const createOwner = async (req: Request, res: Response) => {
    // try {
    //     const user = await userService.addUser(req.body);
    //     res.status(201).json(user);
    // } catch (err) {
    //     res.status(400).json({ message: err });
    // }
};

const getOwners = async (req: Request, res: Response) => {
    try {
        const users = await ownerService.listOwners();
        res.json({ data: users });
    } catch (err) {
        res.json({ message: err });
    }
};

const getOwnerCount = async (req: Request, res: Response) => {
    try {
        const count = await ownerService.countActiveOwners();
        res.json({ data: count });
    } catch (err) {
        res.json({ message: err });
    }
};

export default { createOwner, getOwners, getOwnerCount };
