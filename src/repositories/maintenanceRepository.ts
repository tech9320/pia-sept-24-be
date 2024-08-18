import Maintenance from "../models/maintenanceModel";

const getAllMainenances = async () => {
    return await Maintenance.find({});
};

export default { getAllMainenances };
