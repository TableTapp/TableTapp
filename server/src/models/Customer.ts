import mongoose, { Document, Schema } from "mongoose";

export interface ICustomerBase {
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    Email: string;
};

export interface ICustomer extends ICustomerBase, Document { };

const CustomerSchema: Schema = new Schema(
    {
        Username: {
            type: String,
            required: true
        },
        Password: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Phone: {
            type: String,
            required: false
        },
        Email: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerBase>('Customer', CustomerSchema);

