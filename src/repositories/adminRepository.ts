import Admin from "../models/adminModel";

const getAdmin = async (username: string, password: string) => {
    return await Admin.findOne({ username: username, password: password });
};

const updatePassword = async (userId: string, newPassword: string) => {
    return await Admin.updateOne({ _id: userId }, { password: newPassword });
};

export default { getAdmin, updatePassword };
