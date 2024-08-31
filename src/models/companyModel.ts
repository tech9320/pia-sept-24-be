import { Document, Schema, model } from "mongoose";

type VacationPeriod = {
    start: Date;
    end: Date;
};

type Service = {
    serviceName: string;
    servicePrice: number;
};

interface ICompany extends Document {
    name: string;
    address: string;
    services: Service[];
    contactNumber: string;
    vacationPeriod: VacationPeriod;
}

const companySchema: Schema<ICompany> = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    services: [
        {
            serviceName: { type: String, required: true },
            servicePrice: { type: Number, required: true },
        },
    ],
    contactNumber: { type: String, required: true },
    vacationPeriod: {
        start: { type: Date, required: true },
        end: { type: Date, required: true },
    },
});

const Company = model<ICompany>("Company", companySchema);

export default Company;
export { ICompany };
