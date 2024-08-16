import { Request, Response } from "express";
import checkService from "../services/checkService";

const checkUniqueForEmail = async (req: Request, res: Response) => {
    const email = req.query.email;

    try {
        const { unique } = await checkService.checkUniqueForEmail(email);
        res.json({ message: "ok", unique: unique });
    } catch (err) {
        res.json({ message: "error", unique: false });
    }
};

const checkUniqueForUsername = async (req: Request, res: Response) => {
    const username = req.query.username;

    try {
        const { unique } = await checkService.checkUniqueForUsername(username);
        res.json({ message: "ok", unique: unique });
    } catch (err) {
        res.json({ message: "error", unique: false });
    }
};

export default { checkUniqueForEmail, checkUniqueForUsername };
