"use strict";
var express_1 = require("express");
var generic_1 = require("../controllers/generic");
var Item_1 = require("../models/Item");
var router = express_1.default.Router();
// GET all data config 
router.get('/', generic_1.default.getAll(Item_1.default));
// GET single data config 
router.get('/:id', generic_1.default.get(Item_1.default));
// POST new data config
router.post('/', generic_1.default.create(Item_1.default));
// UPDATE a data config
router.patch('/:id', generic_1.default.update(Item_1.default));
// DELETE a data config
router.delete('/:id', generic_1.default.deleteOne(Item_1.default));
module.exports = router;
