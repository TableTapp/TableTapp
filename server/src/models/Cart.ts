import mongoose, { Document, Schema } from "mongoose";
import { IItemBase } from "./Item";
import { OrderItemSchema } from "./OrderItem";

export interface ICartBase {
    OrderItems: IItemBase[];
    TotalPrice: number;
};

export interface ICart extends ICartBase, Document { };

const CartSchema: Schema = new Schema(
    {
        CustomerId: {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        OrderItems: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'OrderItem'
            }],
            required: false
        },
        TotalPrice: {
            type: Number,
            default: 0,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

CartSchema.pre('findOne', function (next) { 
    this.populate({
        path: "OrderItems", 
        populate: {
            path: 'ItemId',
            populate: {
                path: 'Category',
                model: 'Category',
            },
            model: 'Item',
        },
        options: { strictPopulate: false }
    });
    next();
});

export default mongoose.model<ICartBase>('Cart', CartSchema);