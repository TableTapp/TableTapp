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
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        Description: {
            type: String,
            required: false
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
            required: true
        },
        ImgUrl: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

ItemSchema.pre('findOne', function (next) { 
    this.populate("Category", { options: { strictPopulate: false }});
    next();
});

export default mongoose.model<IItemBase>('Item', ItemSchema);