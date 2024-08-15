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

export default { createWorker, getAllWorkers, getWorker };
