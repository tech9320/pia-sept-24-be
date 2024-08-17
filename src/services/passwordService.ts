import adminService from "./adminService";
import ownerService from "./ownerService";
import workerService from "./workerService";

const changePassword = async (userType: any, userId: any, newPassword: any) => {
    if (userType == "owner") {
        return await ownerService.updatePassword(userId, newPassword);
    }

    if (userType == "worker") {
        return await workerService.updatePassword(userId, newPassword);
    }

    if (userType == "admin") {
        return await adminService.updatePassword(userId, newPassword);
    }
};

export default { changePassword };
