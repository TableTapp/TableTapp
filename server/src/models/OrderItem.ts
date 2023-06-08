import mongoose, { Document, Schema } from "mongoose";

export interface IOrderItemBase {
    ItemId: string;
    Quantity: number;
};

export interface IOrderItem extends IOrderItemBase, Document { };

const OrderItemSchema: Schema = new Schema(
    {
        ItemId: {
            type: Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        Quantity: {
            type: Number,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderItemBase>('OrderItem', OrderItemSchema);