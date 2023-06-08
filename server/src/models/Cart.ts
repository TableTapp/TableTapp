import mongoose, { Document, Schema } from "mongoose";

export interface ICartBase {
    OrderItems: [object];
};

export interface ICart extends ICartBase, Document { };

const CartSchema: Schema = new Schema(
    {
        OrderItems: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'OrderItem'
            }],
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICartBase>('Cart', CartSchema);