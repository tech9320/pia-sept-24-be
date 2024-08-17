import { Request, Response } from "express";
import passwordService from "../services/passwordService";

const updatePassword = async (req: Request, res: Response) => {
    let { userType, userId, newPassword } = req.body;

    try {
        await passwordService.changePassword(userType, userId, newPassword);
        res.json({ message: "ok" });
    } catch (err) {
        res.json({ message: "error", error: err });
    }
};

export default { updatePassword };
