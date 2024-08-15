import adminRepository from "../repositories/adminRepository";

const getAdmin = async (username: string, password: string) => {
    return await adminRepository.getAdmin(username, password);
};

export default { getAdmin };
