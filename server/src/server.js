"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var mongoose_1 = require("mongoose");
var config_1 = require("./config/config");
var Logging_1 = require("./library/Logging");
var genericRoutes_1 = require("./routes/genericRoutes");
var orderRoutes_1 = require("./routes/orderRoutes");
var tableRoutes_1 = require("./routes/tableRoutes");
var customerRoutes_1 = require("./routes/customerRoutes");
var vendorRoutes_1 = require("./routes/vendorRoutes");
var menuRoutes_1 = require("./routes/menuRoutes");
var itemRoutes_1 = require("./routes/itemRoutes");
var orderItemRoutes_1 = require("./routes/orderItemRoutes");
var cartRoutes_1 = require("./routes/cartRoutes");
var router = (0, express_1.default)();
// Only change the connection String
mongoose_1.default.connect(config_1.config.mongo.url, { w: 'majority', retryWrites: true })
    .then(function () {
    Logging_1.default.info('Connected to database');
    StartServer();
})
    .catch(function (error) {
    Logging_1.default.error('Unable to connect:');
    Logging_1.default.error(error);
});
// on startup create a new database only use this database if in local mode. Check if local database and compare with remote. Prompt a upload option.
var StartServer = function () {
    router.use(function (req, res, next) {
        /** Log the req */
        Logging_1.default.info("Incomming - METHOD: [".concat(req.method, "] - URL: [").concat(req.url, "] - IP: [").concat(req.socket.remoteAddress, "]"));
        res.on('finish', function () {
            /** Log the res */
            Logging_1.default.info("Result - METHOD: [".concat(req.method, "] - URL: [").concat(req.url, "] - IP: [").concat(req.socket.remoteAddress, "] - STATUS: [").concat(res.statusCode, "]"));
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    /** Rules of our API */
    router.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    /** Routes */
    router.use('/generic', genericRoutes_1.default);
    router.use('/customer', customerRoutes_1.default);
    router.use('/vendor', vendorRoutes_1.default);
    router.use('/table', tableRoutes_1.default);
    router.use('/order', orderRoutes_1.default);
    router.use('/item', itemRoutes_1.default);
    router.use('/orderItem', orderItemRoutes_1.default);
    router.use('/cart', cartRoutes_1.default);
    router.use('/menu', menuRoutes_1.default);
    /** Healthcheck */
    router.get('/ping', function (req, res, next) { return res.status(200).json({ ping: 'pong' }); });
    /** Error handling */
    router.use(function (req, res, next) {
        var error = new Error('Not found');
        Logging_1.default.error(error);
        res.status(404).json({
            message: error.message
        });
    });
    http_1.default.createServer(router).listen(config_1.config.server.port, function () { return Logging_1.default.info("Server is running on port ".concat(config_1.config.server.port)); });
};
