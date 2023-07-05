"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var GenericSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Generic', GenericSchema);
