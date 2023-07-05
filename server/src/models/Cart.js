"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var CartSchema = new mongoose_1.Schema({
    OrderItems: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'OrderItem'
            }],
        required: true
    },
    TotalPrice: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Cart', CartSchema);
