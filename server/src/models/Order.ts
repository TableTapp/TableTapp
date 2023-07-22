import mongoose, { Document, Schema } from "mongoose";

enum OrderStatus{
    Requested = 'REQUESTED',
    Approved = 'APPROVED',
    InProgress = 'IN PROGRESS',
    Delivered = "DELIVERED"
};

export interface IOrderBase {
    TableId: string;
    CustomerId: string;
    OrderItems: object[];
    Status: OrderStatus;
};

export interface IOrder extends IOrderBase, Document { };

const OrderSchema: Schema = new Schema(
    {
        TableId: {
            type: Schema.Types.ObjectId,
            ref: 'Table',
            required: true
        },
        CustomerId: {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            require: true
        },
        OrderItems: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'OrderItem'
            }],
            require: true
        },
        Status: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IOrderBase>('Order', OrderSchema);