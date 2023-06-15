import mongoose, { Document, Schema } from "mongoose";

export interface IOrderItemBase {
    ItemId: string;
    Quantity: number;
    AdditionalRequests: string;
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
        },
        AdditionalRequests: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderItemBase>('OrderItem', OrderItemSchema);