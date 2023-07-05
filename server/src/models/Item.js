"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var ItemSchema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: true
    },
    Category: {
        type: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Category'
        },
        require: true
    },
    Description: {
        type: String,
        require: false
    },
    AddOns: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'ItemAddOns'
            }],
        required: false
    },
    Price: {
        type: Number,
        require: true
    },
    ImgUrl: {
        type: String,
        require: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Item', ItemSchema);
