import mongoose, { Document, Schema } from "mongoose";
import { ICategory } from "./Category";
import { IItemAddOnsBase } from "./ItemAddOns";

export interface IItemBase {
    Name: string;
    Category: ICategory;
    Description: string;
    AddOns: IItemAddOnsBase[];
    Price: number;
    ImgUrl: string;
};

export interface IItem extends IItemBase, Document { };

const ItemSchema: Schema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Category: {
            type: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            },
            require: true
        },
        Description: {
            type: String,
            require: false
        },
        AddOns: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'ItemAddOns'
            }],
            required: false
        },
        Price: {
            type: Number,
            require: true
        },
        ImgUrl: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IItemBase>('Item', ItemSchema);