import mongoose, { Document, Schema } from "mongoose";
import { IItemBase } from "./Item"

export interface IMenuBase {
    Items: IItemBase[];
};

export interface IMenu extends IMenuBase, Document { };

const MenuSchema: Schema = new Schema(
    {
        Items: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }],
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IMenuBase>('Menu', MenuSchema);