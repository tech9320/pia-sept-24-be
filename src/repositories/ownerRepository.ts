import Owner, { IOwner } from "../models/ownerModel";

const createOwner = async (data: IOwner) => {
    const user = new Owner(data);
    return await user.save();
};

const getAllOwners = async () => {
    return await Owner.find({});
};

const getOwner = async (username: string, password: string) => {
    return await Owner.findOne({ username: username, password: password });
};

const containsOwnerWithGivenEmail = async (email: string) => {
    const owner = await Owner.exists({ email: email });

    if (owner == null) {
        return false;
    }
    return true;
};

const containsOwnerWithGivenUsername = async (username: string) => {
    const owner = await Owner.exists({ username: username });

    if (owner == null) {
        return false;
    }
    return true;
};

export default {
    createOwner,
    getAllOwners,
    getOwner,
    containsOwnerWithGivenEmail,
    containsOwnerWithGivenUsername,
};
