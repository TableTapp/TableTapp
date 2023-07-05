"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
;
var VendorSchema = new mongoose_1.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    Phone: {
        type: String,
        require: false
    },
    Email: {
        type: String,
        require: false
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = mongoose_1.default.model('Vendor', VendorSchema);
