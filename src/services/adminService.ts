import adminRepository from "../repositories/adminRepository";

const getAdmin = async (username: string, password: string) => {
    return await adminRepository.getAdmin(username, password);
};

const updatePassword = async (userId: string, newPassword: string) => {
    return await adminRepository.updatePassword(userId, newPassword);
};

export default { getAdmin, updatePassword };
