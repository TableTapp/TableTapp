import mongoose, { Document, Schema } from "mongoose";

export interface IItemAddOnsBase {
    Name: string;
    Price: number;
};

export interface IItemAddOns extends IItemAddOnsBase, Document { };

const ItemAddOnsSchema: Schema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            default: 0
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IItemAddOnsBase>('ItemAddOns', ItemAddOnsSchema);