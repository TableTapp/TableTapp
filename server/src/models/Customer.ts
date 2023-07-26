import mongoose, { Document, Schema } from "mongoose";
import User, { IUser } from "./User";

export interface ICustomerBase {
    User: IUser;
};

export interface ICustomer extends ICustomerBase, Document { };

const CustomerSchema: Schema = new Schema(
    {
        User: {
            type: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// CustomerSchema.pre("save", async function (next) {
//     try {
//       if (this.User) {
//         const user = await User.findById(this.User);
//         if (user) {
//           this.User = user;
//         }
//       }
//       next();
//     } catch (err: any) {
//       next(err);
//     }
//   });

export default mongoose.model<ICustomerBase>('Customer', CustomerSchema);
