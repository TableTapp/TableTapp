import mongoose, { Document, Schema } from "mongoose";

enum OrderStatus{
    Requested = 'REQUESTED',
    Approved = 'APPROVED',
    InProgress = 'IN_PROGRESS',
    Delivered = "DELIVERED"
};

export interface IOrder {
    TableNumber: string;
    Item: string;
    Status: OrderStatus;
};

export interface IOrderModel extends IOrder, Document { };

const OrderSchema: Schema = new Schema(
    {
        TableNumber: {
            type: Number,
            required: true
        },
        Item: {
            type: String,
            require: true
        },
        Status: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrder>('Order', OrderSchema);