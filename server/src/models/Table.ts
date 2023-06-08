import mongoose, { Document, Schema } from "mongoose";

enum TableStatus {
    Reserved = "RESERVED",
    Occupied = "OCCUPIED",
    Open = "OPEN",
};

export interface ITableBase {
    Customers: string;
    Status: TableStatus;
};

export interface ITable extends ITableBase, Document { };

const TableSchema: Schema = new Schema(
    {
        Customers: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'Customer'
            }],
            required: true
        },
        Status: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default mongoose.model<ITableBase>('Table', TableSchema);