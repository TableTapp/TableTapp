import mongoose, { Document, Schema } from "mongoose";

export interface ICategoryBase {
    Name: string;
    ImgUrl: string;
};

export interface ICategory extends ICategoryBase, Document { };

const CategorySchema: Schema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        ImgUrl: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);
export default mongoose.model<ICategoryBase>('Category', CategorySchema);