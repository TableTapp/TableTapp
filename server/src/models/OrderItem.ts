import mongoose, { Document, Schema } from "mongoose";

export interface IOrderItemBase {
    ItemId: string;
    Quantity: number;
    AdditionalRequests: string;
};

export interface IOrderItem extends IOrderItemBase, Document { };

export const OrderItemSchema: Schema = new Schema(
    {
        ItemId: {
            type: Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        Quantity: {
            type: Number,
            required: true
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

OrderItemSchema.pre('findOne', function (next) { 
    this.populate("ItemId", { options: { strictPopulate: false }});
    next();
});

export default mongoose.model<IOrderItemBase>('OrderItem', OrderItemSchema);