"use strict";
var express_1 = require("express");
var generic_1 = require("../controllers/generic");
var Cart_1 = require("../models/Cart");
var router = express_1.default.Router();
// GET all data config 
router.get('/', generic_1.default.getAll(Cart_1.default));
// GET single data config 
router.get('/:id', generic_1.default.get(Cart_1.default));
// POST new data config
router.post('/', generic_1.default.create(Cart_1.default));
// UPDATE a data config
router.patch('/:id', generic_1.default.update(Cart_1.default));
// DELETE a data config
router.delete('/:id', generic_1.default.deleteOne(Cart_1.default));
module.exports = router;
