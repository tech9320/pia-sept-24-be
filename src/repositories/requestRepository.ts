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

const updateRequestStatus = async (
    requestId: string,
    workerId: string,
    __status__: string
) => {
    const request: any = await RequestM.findById(requestId);

    const result = await RequestM.updateMany(
        { _id: requestId },
        {
            workerId: workerId,
            __status__: __status__,
            lastMaintenanceAt: request.requestCompletedAt,
        }
    );

    return result;
};

export default {
    getAllRequests,
    isWorkerWorkingOnGivenDate,
    createRequest,
    updateRequestStatus,
};
