"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TableStatus;
(function (TableStatus) {
    TableStatus["Reserved"] = "RESERVED";
    TableStatus["Occupied"] = "OCCUPIED";
    TableStatus["Open"] = "OPEN";
})(TableStatus || (TableStatus = {}));
;
;
;
var TableSchema = new mongoose_1.Schema({
    TableNumber: {
        type: Number,
        required: true
    },
    Customers: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Table', TableSchema);
