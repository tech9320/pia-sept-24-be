import { Document, Schema, model } from "mongoose";

interface IAdmin extends Document {
    username: string;
    password: string;
}

const adminSchema: Schema<IAdmin> = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Admin = model<IAdmin>("Admin", adminSchema);

export default Admin;
export { IAdmin };
