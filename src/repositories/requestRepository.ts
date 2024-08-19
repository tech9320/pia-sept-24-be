import RequestM from "../models/requestModel";
import Request, { IRequest } from "../models/requestModel";

const getAllRequests = async () => {
    return await Request.find({});
};

const isWorkerWorkingOnGivenDate = async (workerId: string, date: Date) => {
    const result = await Request.exists({
        workerId: workerId,
        requestCompletedAt: date,
    });

    if (result == null) {
        return false;
    }
    return true;
};

const createRequest = async (requestData: IRequest) => {
    const request = new RequestM(requestData);
    return request.save();
};

export default { getAllRequests, isWorkerWorkingOnGivenDate, createRequest };
