import ownerService from "./ownerService";
import workerService from "./workerService";

const checkUniqueForEmail = async (
    email: any
): Promise<{ unique: boolean }> => {
    const ownerResult = await ownerService.containsOwnerWithGivenEmail(email);

    if (ownerResult) {
        return { unique: false };
    }

    const workerResult = await workerService.containsWorkerWithGivenEmail(
        email
    );

    if (workerResult) {
        return { unique: false };
    }

    return { unique: true };
};

const checkUniqueForUsername = async (
    username: any
): Promise<{ unique: boolean }> => {
    const ownerResult = await ownerService.containsOwnerWithGivenUsername(
        username
    );

    if (ownerResult) {
        return { unique: false };
    }

    const workerResult = await workerService.containsWorkerWithGivenUsername(
        username
    );

    if (workerResult) {
        return { unique: false };
    }

    return { unique: true };
};

export default { checkUniqueForEmail, checkUniqueForUsername };
