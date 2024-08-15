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

export default { createOwner, getAllOwners, getOwner };
