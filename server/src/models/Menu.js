"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var MenuSchema = new mongoose_1.Schema({
    Items: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Item'
            }],
        require: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Menu', MenuSchema);
