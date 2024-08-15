import { Document, Schema, model } from "mongoose";

interface IOwner extends Document {
    username: string;
    password: string;
    name: string;
    surname: string;
    gender: "M" | "Z";
    address: string;
    contactNumber: string;
    email: string;
    photo: string;
    cardNumber: string;
    __status__: "awaiting" | "approved" | "rejected" | "redacted";
}

const ownerSchema: Schema<IOwner> = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    gender: { type: String, enum: ["M", "Z"], required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    cardNumber: { type: String, required: true },
    __status__: {
        type: String,
        enum: ["awaiting", "approved", "rejected", "redacted"],
        required: true,
    },
});

const Owner = model<IOwner>("User", ownerSchema);

export default Owner;
export { IOwner };
