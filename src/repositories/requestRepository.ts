import Request from "../models/requestModel";

const getAllRequests = async () => {
    return await Request.find({});
};

export default { getAllRequests };
