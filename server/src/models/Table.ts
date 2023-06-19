import mongoose, { Document, Schema } from "mongoose";
import { ICustomer } from "./Customer";

enum TableStatus {
    Reserved = "RESERVED",
    Occupied = "OCCUPIED",
    Open = "OPEN",
};

export interface ITableBase {
    TableNumber: number;
    Customers: ICustomer[];
    Seats: number;
    Status: TableStatus;
};

export interface ITable extends ITableBase, Document { };

const TableSchema: Schema = new Schema(
    {
        TableNumber: {
            type: Number,
            required: true
        },
        Customers: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'Customer'
            }],
            required: true
        },
        Seats: {
            type: Number,
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