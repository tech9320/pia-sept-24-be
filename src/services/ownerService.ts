import { IOwner } from "../models/ownerModel";
import ownerRepository from "../repositories/ownerRepository";

const addOwner = async (ownerData: IOwner) => {
    return await ownerRepository.createOwner(ownerData);
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

export default { addOwner, listOwners, getOwner, countActiveOwners };
