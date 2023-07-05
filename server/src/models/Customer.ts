import mongoose, { Document, Schema } from "mongoose";
import { IUserBase } from "./User";

export interface ICustomerBase {
    User: IUserBase;
};

export interface ICustomer extends ICustomerBase, Document { };

const CustomerSchema: Schema = new Schema(
    {
        User: {
            type: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICustomerBase>('Customer', CustomerSchema);

