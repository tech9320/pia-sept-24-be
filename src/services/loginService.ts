import adminService from "./adminService";
import ownerService from "./ownerService";
import workerService from "./workerService";

const loginUser = async (
    username: string,
    password: string
): Promise<{ message: string; data: any }> => {
    const owner = await ownerService.getOwner(username, password);

    if (owner) {
        return { message: "owner", data: owner };
    }

    const worker = await workerService.getWorker(username, password);

    if (worker) {
        return { message: "worker", data: worker };
    }

    return { message: "non-existing", data: {} };
};

const loginAdmin = async (
    username: string,
    password: string
): Promise<{ message: string; data: any }> => {
    const admin = await adminService.getAdmin(username, password);

    if (admin) {
        return { message: "admin", data: admin };
    }

    return { message: "non-existing", data: {} };
};

export default { loginUser, loginAdmin };
