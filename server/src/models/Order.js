"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Requested"] = "REQUESTED";
    OrderStatus["Approved"] = "APPROVED";
    OrderStatus["InProgress"] = "IN PROGRESS";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
;
;
;
var OrderSchema = new mongoose_1.Schema({
    TableId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
    CustomerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Customer',
        require: true
    },
    OrderItems: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'OrderItem'
            }],
        require: true
    },
    Status: {
        type: String,
        require: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Order', OrderSchema);
