import { IOwner } from "../models/ownerModel";
import ownerRepository from "../repositories/ownerRepository";

const addOwner = async (ownerData: IOwner) => {
    return await ownerRepository.createOwner(ownerData);
};

const updateOwner = async (ownerData: IOwner, userId: string) => {
    return await ownerRepository.updateOwner(ownerData, userId);
};

const listOwners = async () => {
    return await ownerRepository.getAllOwners();
};

const countActiveOwners = async () => {
    const allOwners = await ownerRepository.getAllOwners();

    let count = 0;

    for (let owner of allOwners) {
        if (owner.__status__ == "approved") {
            count++;
        }
    }

    return count;
};

const getOwner = async (username: string, password: string) => {
    return await ownerRepository.getOwner(username, password);
};

const containsOwnerWithGivenEmail = async (email: string) => {
    return await ownerRepository.containsOwnerWithGivenEmail(email);
};

const containsOwnerWithGivenUsername = async (username: string) => {
    return await ownerRepository.containsOwnerWithGivenUsername(username);
};

const updatePassword = async (userId: string, newPassword: string) => {
    return await ownerRepository.updatePassword(userId, newPassword);
};

export default {
    addOwner,
    listOwners,
    getOwner,
    countActiveOwners,
    containsOwnerWithGivenEmail,
    containsOwnerWithGivenUsername,
    updatePassword,
    updateOwner,
};
