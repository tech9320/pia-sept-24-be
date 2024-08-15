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
    photo: string;
    company: ICompany["_id"];
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
    photo: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: "Company", require: true },
});

const Worker = model<IWorker>("Worker", workerSchema);

export default Worker;
export { IWorker };
