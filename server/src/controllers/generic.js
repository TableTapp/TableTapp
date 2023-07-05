"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var create = function (model) { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var doc, results, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Create new document for ".concat(model.modelName));
                doc = new model(__assign({ _id: new mongoose_1.default.Types.ObjectId() }, req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, doc.save()];
            case 2:
                results = _a.sent();
                res.status(201).json({ results: results });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(500).json({ error: error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
var getAll = function (model, populate) { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var results, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Getting all documents for ".concat(model.modelName));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model.find().populate(populate || [])];
            case 2:
                results = _a.sent();
                console.log(results);
                return [2 /*return*/, res.status(200).json({ results: results })];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(500).json({ error: error_2 })];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
var get = function (model, populate) { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Getting all documents from ".concat(model.modelName, " by id"));
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model
                        .findOne({ _id: id })
                        .populate(populate || [])];
            case 2:
                result = _a.sent();
                if (!result) {
                    console.log('Not found');
                    return [2 /*return*/, res.status(404).json({ message: "".concat(model.modelName, " with ").concat(id, " Not found") })];
                }
                return [2 /*return*/, res.status(200).json({ result: result })];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json({ error: error_3 })];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
var update = function (model, populate) { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Updating documents from ".concat(model.modelName, " by id"));
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, model
                        .findOne({ _id: id })
                        .populate(populate || [])];
            case 2:
                result = _a.sent();
                if (!result) {
                    console.log('Not found');
                    return [2 /*return*/, res.status(404).json({ message: "".concat(model.modelName, " with ").concat(id, " Not found") })];
                }
                result.set(req.body);
                result.save();
                return [2 /*return*/, res.status(200).json({ result: result })];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(500).json({ error: error_4 })];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
var deleteOne = function (model) { return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, results, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, model.findByIdAndDelete(id)];
            case 1:
                results = _a.sent();
                if (!results) {
                    res.status(404).json({ message: 'Not Found' });
                }
                res.status(201).json({ message: 'deleted' });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(500).json({ error: error_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); }; };
exports.default = {
    create: create,
    getAll: getAll,
    get: get,
    update: update,
    deleteOne: deleteOne
};
