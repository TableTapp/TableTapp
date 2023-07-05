"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var Logging = /** @class */ (function () {
    function Logging() {
    }
    var _a;
    _a = Logging;
    Logging.log = function (args) { return _a.info(args); };
    Logging.info = function (args) { return console.log(chalk_1.default.blue("[".concat(new Date().toLocaleString(), "] [INFO]")), typeof args === 'string' ? chalk_1.default.blueBright(args) : args); };
    Logging.warning = function (args) { return console.log(chalk_1.default.yellow("[".concat(new Date().toLocaleString(), "] [WARN]")), typeof args === 'string' ? chalk_1.default.yellowBright(args) : args); };
    Logging.error = function (args) { return console.log(chalk_1.default.red("[".concat(new Date().toLocaleString(), "] [ERROR]")), typeof args === 'string' ? chalk_1.default.redBright(args) : args); };
    return Logging;
}());
exports.default = Logging;
