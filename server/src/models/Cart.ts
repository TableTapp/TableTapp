import mongoose, { Document, Schema } from "mongoose";
import { IOrderItemBase } from "./OrderItem";

export interface ICartBase {
    OrderItems: IOrderItemBase[];
    TotalPrice: number;
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
        },
        TotalPrice: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ICartBase>('Cart', CartSchema);