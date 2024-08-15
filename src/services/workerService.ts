import { IWorker } from "../models/workerModel";
import workerRepository from "../repositories/workerRepository";

const addWorker = async (userData: IWorker) => {
    return await workerRepository.createWorker(userData);
};

const listWorkers = async () => {
    return await workerRepository.getAllWorkers();
};

const getWorker = async (username: string, password: string) => {
    return await workerRepository.getWorker(username, password);
};

const countWorkers = async () => {
    const allWorkers = await workerRepository.getAllWorkers();

    return allWorkers.length;
};

export default { addWorker, listWorkers, getWorker, countWorkers };
