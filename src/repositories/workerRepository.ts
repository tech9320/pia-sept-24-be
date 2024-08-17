import Worker, { IWorker } from "../models/workerModel";

const createWorker = async (data: IWorker) => {
    const worker = new Worker(data);
    return await worker.save();
};

const getAllWorkers = async () => {
    return await Worker.find({});
};

const getWorker = async (username: string, password: string) => {
    return await Worker.findOne({ username: username, password: password });
};

const containsOwnerWithGivenEmail = async (email: string) => {
    const worker = await Worker.exists({ email: email });

    if (worker == null) {
        return false;
    }
    return true;
};

const containsOwnerWithGivenUsername = async (username: string) => {
    const worker = await Worker.exists({ username: username });

    if (worker == null) {
        return false;
    }
    return true;
};

const updatePassword = async (userId: string, newPassword: string) => {
    const result = await Worker.updateMany(
        { _id: userId },
        { password: newPassword }
    );

    return result;
};

export default {
    createWorker,
    getAllWorkers,
    getWorker,
    containsOwnerWithGivenEmail,
    containsOwnerWithGivenUsername,
    updatePassword,
};
