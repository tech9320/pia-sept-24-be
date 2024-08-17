import Owner, { IOwner } from "../models/ownerModel";

const createOwner = async (data: IOwner) => {
    const user = new Owner(data);
    return await user.save();
};

const updateOwner = async (data: IOwner, userId: string) => {
    const result = await Owner.updateMany(
        { _id: userId },
        {
            name: data.name,
            surname: data.surname,
            address: data.address,
            contactNumber: data.contactNumber,
            cardNumber: data.cardNumber,
            email: data.email,
            photoBitecode: data.photoBitecode,
        }
    );

    return result;
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

const updatePassword = async (userId: string, newPassword: string) => {
    const result = await Owner.updateMany(
        { _id: userId },
        { password: newPassword }
    );

    return result;
};

const updateOwnerStatus = async (userId: string, __status__: string) => {
    const result = await Owner.updateMany(
        { _id: userId },
        { __status__: __status__ }
    );

    return result;
};

const deactivateOwner = async (userId: string) => {
    const result = await Owner.updateMany(
        { _id: userId },
        { __status__: "redacted" }
    );

    return result;
};

export default {
    createOwner,
    getAllOwners,
    getOwner,
    containsOwnerWithGivenEmail,
    containsOwnerWithGivenUsername,
    updatePassword,
    updateOwner,
    deactivateOwner,
    updateOwnerStatus,
};
