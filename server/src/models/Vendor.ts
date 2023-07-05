import mongoose, { Document, Schema } from "mongoose";
import { IUserBase } from "./User";

export interface IVendorBase {
    User: IUserBase;
};

export interface IVendor extends IVendorBase, Document { };

const VendorSchema: Schema = new Schema(
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

export default mongoose.model<IVendorBase>('Vendor', VendorSchema);