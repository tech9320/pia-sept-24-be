import { Document, Schema, model } from "mongoose";
import { ICompany } from "./companyModel";

interface IWorker extends Document {
    username: string;
    password: string;
    name: string;
    surname: string;
    gender: "M" | "Z";
    address: string;
    contactNumber: string;
    email: string;
    photoBitecode: string;
    company: ICompany["_id"];
    __status__: "active" | "deactivated";
}

const workerSchema: Schema<IWorker> = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    gender: { type: String, enum: ["M", "Z"], required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photoBitecode: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Company", require: true },
    __status__: {
        type: String,
        enum: ["active", "deactivated"],
        required: true,
    },
});

const Worker = model<IWorker>("Worker", workerSchema);

export default Worker;
export { IWorker };
