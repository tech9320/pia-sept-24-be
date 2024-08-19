import { Document, Schema, model } from "mongoose";
import { IOwner } from "./ownerModel";
import { ICompany } from "./companyModel";
import { IWorker } from "./workerModel";

type Service = {
    serviceName: string;
    servicePrice: number;
};

interface IRequest extends Document {
    ownerId: IOwner["_id"];
    companyId: ICompany["_id"];
    workerId?: IWorker["_id"];
    gardenType: "P" | "R";
    gardenArea: number;
    greenArea: number;
    poolArea?: number;
    fountainArea?: number;
    furnitureArea?: number;
    furnitureNumber?: number;
    selectedServices: Service[];
    createdAt: Date;
    requestCompletedAt: Date;
    lastMaintenanceAt: Date;
}

const requestSchema: Schema<IRequest> = new Schema({
    ownerId: { type: Schema.Types.ObjectId, ref: "Owner", require: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", require: true },
    workerId: { type: Schema.Types.ObjectId, ref: "Worker" },
    gardenType: { type: String, enum: ["P", "R"], required: true },
    gardenArea: { type: Number, required: true },
    greenArea: { type: Number, required: true },
    poolArea: { type: Number },
    fountainArea: { type: Number },
    furnitureArea: { type: Number },
    furnitureNumber: { type: Number },
    selectedServices: [
        {
            serviceName: { type: String, required: true },
            servicePrice: { type: Number, required: true },
        },
    ],
    createdAt: { type: Date, required: true },
    requestCompletedAt: { type: Date, required: true },
    lastMaintenanceAt: { type: Date, required: true },
});

const RequestM = model<IRequest>("Request", requestSchema);

export default RequestM;
export { IRequest };
