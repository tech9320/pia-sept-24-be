import { IWorker } from "../models/workerModel";
import workerRepository from "../repositories/workerRepository";

const addWorker = async (userData: IWorker) => {
    return await workerRepository.createWorker(userData);
};

const deactivateWorker = async (userId: string) => {
    return await workerRepository.deactivateWorker(userId);
};

const updateWorker = async (userData: IWorker, userId: string) => {
    return await workerRepository.updateWorker(userData, userId);
};

const listWorkers = async () => {
    return await workerRepository.getAllWorkers();
};

const listWorkersOfCompany = async (companyId: string) => {
    return await workerRepository.getAllWorkersOfCompany(companyId);
};

const getWorker = async (username: string, password: string) => {
    return await workerRepository.getWorker(username, password);
};

const countWorkers = async () => {
    const allWorkers = await workerRepository.getAllWorkers();

    return allWorkers.length;
};

const containsWorkerWithGivenEmail = async (email: string) => {
    return await workerRepository.containsOwnerWithGivenEmail(email);
};

const containsWorkerWithGivenUsername = async (username: string) => {
    return await workerRepository.containsOwnerWithGivenUsername(username);
};

const updatePassword = async (userId: string, newPassword: string) => {
    return await workerRepository.updatePassword(userId, newPassword);
};

export default {
    addWorker,
    listWorkers,
    getWorker,
    countWorkers,
    containsWorkerWithGivenEmail,
    containsWorkerWithGivenUsername,
    updatePassword,
    updateWorker,
    deactivateWorker,
    listWorkersOfCompany,
};
