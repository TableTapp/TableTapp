import mongoose, { Document, Schema } from "mongoose";

enum AddOnSize {
    Small = "SML",
    Medium = "MED",
    Large = "LRG",
};

export interface IItemAddOnsBase {
    Name: string;
    Size: AddOnSize;
    Price: number;
};

export interface IItemAddOns extends IItemAddOnsBase, Document { };

const ItemAddOnsSchema: Schema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Size: {
            type: String,
            required: false
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