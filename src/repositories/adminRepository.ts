import Admin from "../models/adminModel";

const getAdmin = async (username: string, password: string) => {
    return await Admin.findOne({ username: username, password: password });
};

const updatePassword = async (userId: string, newPassword: string) => {
    const result = await Admin.updateMany(
        { _id: userId },
        { password: newPassword }
    );

    return result;
};

export default { getAdmin, updatePassword };
