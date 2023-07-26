import mongoose, { Document, Schema } from "mongoose";
import User, { IUser } from "./User";

export interface IVendorBase {
    User: IUser;
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

VendorSchema.pre("save", async function (next) {
    try {
      if (this.User && typeof this.User === "string") {
        const user = await User.findById(this.User);
        if (user) {
          this.User = user;
        }
      }
      next();
    } catch (err: any) {
      next(err);
    }
  });

export default mongoose.model<IVendorBase>('Vendor', VendorSchema);