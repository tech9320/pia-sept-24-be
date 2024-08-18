import requestRepository from "../repositories/requestRepository";

const listRequests = async () => {
    return await requestRepository.getAllRequests();
};

export default { listRequests };
