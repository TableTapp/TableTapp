import mongoose, { Document, Schema } from "mongoose";

export interface IItemBase {
    Name: string;
    Category: string;
    Description: string;
    Price: number;
};

export interface IItem extends IItemBase, Document { };

const ItemSchema: Schema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            require: true
        },
        Description: {
            type: String,
            require: false
        },
        Price: {
            type: Number,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IItemBase>('Item', ItemSchema);