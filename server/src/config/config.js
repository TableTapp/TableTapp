"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var MONGO_USERNAME = process.env.MONGO_USERNAME || '';
var MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
var MONGO_DB_STRING = process.env.MONGO_DB_STRING || '';
var DATA_BASE_NAME = process.env.MONGO_DB_NAME || '';
console.log(process.env.MONGO_PASSWORD);
console.log("DataBase Username: ".concat(MONGO_USERNAME, "\nDataBase Password: ").concat(MONGO_PASSWORD));
var MONGO_URL = "mongodb+srv://".concat(MONGO_USERNAME, ":").concat(MONGO_PASSWORD, "@").concat(DATA_BASE_NAME, ".").concat(MONGO_DB_STRING, ".mongodb.net/");
var SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;
exports.config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
