"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var OrderItemSchema = new mongoose_1.Schema({
    ItemId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    Quantity: {
        type: Number,
        require: true
    },
    AdditionalRequests: {
        type: String,
        required: false
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('OrderItem', OrderItemSchema);
