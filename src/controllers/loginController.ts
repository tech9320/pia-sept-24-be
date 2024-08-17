import { Request, Response } from "express";
import loginService from "../services/loginService";

const loginUser = async (req: Request, res: Response) => {
    const username = req.query.username;
    const password = req.query.password;

    try {
        const { message, data } = await loginService.loginUser(
            username,
            password
        );
        res.json({ message: message, data: data });
    } catch (err) {
        res.json({ message: "error", data: err });
    }
};

const loginAdmin = async (req: Request, res: Response) => {
    const username = req.query.username;
    const password = req.query.password;

    try {
        const { message, data } = await loginService.loginAdmin(
            username,
            password
        );
        res.json({ message: message, data: data });
    } catch (err) {
        res.json({ message: err, data: {} });
    }
};

export default { loginUser, loginAdmin };
