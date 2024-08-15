import Admin from "../models/adminModel";

const getAdmin = async (username: string, password: string) => {
    return await Admin.findOne({ username: username, password: password });
};

export default { getAdmin };
