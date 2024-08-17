import { Request, Response } from "express";
import ownerService from "../services/ownerService";
import utils from "../utils";
import Owner from "../models/ownerModel";

const createOwner = async (req: Request, res: Response) => {
    let {
        username,
        password,
        name,
        surname,
        gender,
        address,
        contactNumber,
        email,
        photoBitecode,
        cardNumber,
    } = req.body;

    if (photoBitecode == "") {
        photoBitecode = utils.encodeImageToBase64(
            "resources/images/default-avatar.png"
        );
    }

    const owner = new Owner({
        username,
        password,
        name,
        surname,
        gender,
        address,
        contactNumber,
        email,
        photoBitecode,
        cardNumber,
        __status__: "awaiting",
    });

    try {
        await ownerService.addOwner(owner);
        res.json({ status: "ok", message: "saved" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const deactivateOwner = async (req: Request, res: Response) => {
    let { userId } = req.body;

    try {
        await ownerService.deactivateOwner(userId);
        res.json({ status: "ok", message: "deactivated" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
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

const updateOwner = async (req: Request, res: Response) => {
    let {
        name,
        surname,
        address,
        contactNumber,
        emailAddress,
        photoBitecode,
        cardNumber,
        userId,
    } = req.body;

    if (photoBitecode == "") {
        photoBitecode = utils.encodeImageToBase64(
            "resources/images/default-avatar.png"
        );
    }

    const owner = new Owner({
        name,
        surname,
        address,
        contactNumber,
        email: emailAddress,
        photoBitecode,
        cardNumber,
    });

    try {
        await ownerService.updateOwner(owner, userId);
        res.json({ status: "ok", message: "updated" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

export default {
    createOwner,
    getOwners,
    getOwnerCount,
    updateOwner,
    deactivateOwner,
};
