import mongoose, { Document, Schema } from "mongoose";

export interface IMenuBase {
    Category: string;
    Items: [object];
};

export interface IMenu extends IMenuBase, Document { };

const MenuSchema: Schema = new Schema(
    {
        Category: {
            type: String,
            required: true
        },
        Items: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }],
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<IMenuBase>('Menu', MenuSchema);