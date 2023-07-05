"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var ItemAddOnsSchema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('ItemAddOns', ItemAddOnsSchema);
