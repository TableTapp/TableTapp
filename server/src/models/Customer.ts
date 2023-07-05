import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./User";

export interface ICustomerBase {
    User: IUser;
};

export interface ICustomer extends ICustomerBase, Document { };

const CustomerSchema: Schema = new Schema(
    {
        User: {
            type: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerBase>('Customer', CustomerSchema);

