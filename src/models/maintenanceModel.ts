import { Document, Schema, model } from "mongoose";
import { IRequest } from "./requestModel";
import { IWorker } from "./workerModel";
import { ICompany } from "./companyModel";

interface IMaintenance extends Document {
    requestId: IRequest["_id"];
    workerId?: IWorker["_id"];
    companyId: ICompany["_id"];
    completedAt?: Date;
    __status__: "waiting" | "approved" | "rejected";
}

const maintenanceSchema: Schema<IMaintenance> = new Schema({
    requestId: { type: Schema.Types.ObjectId, ref: "Request", require: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", require: true },
    workerId: { type: Schema.Types.ObjectId, ref: "Worker" },
    completedAt: { type: Date },
    __status__: {
        type: String,
        enum: ["waiting", "approved", "rejected"],
        required: true,
    },
});

const Maintenance = model<IMaintenance>("Maintenance", maintenanceSchema);

export default Maintenance;
export { IMaintenance };
