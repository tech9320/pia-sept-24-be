import { IRequest } from "../models/requestModel";
import requestRepository from "../repositories/requestRepository";

const listRequests = async () => {
    return await requestRepository.getAllRequests();
};

const isWorkerWorkingOnGivenDate = async (workerId: any, date: any) => {
    return await requestRepository.isWorkerWorkingOnGivenDate(workerId, date);
};

const addRequest = async (requestData: IRequest) => {
    return await requestRepository.createRequest(requestData);
};

export default { listRequests, isWorkerWorkingOnGivenDate, addRequest };
