"use strict";
var express_1 = require("express");
var generic_1 = require("../controllers/generic");
var Generic_1 = require("../models/Generic");
var router = express_1.default.Router();
// GET all data config 
router.get('/', generic_1.default.getAll(Generic_1.default));
// GET single data config 
router.get('/:id', generic_1.default.get(Generic_1.default));
// POST new data config
router.post('/', generic_1.default.create(Generic_1.default));
// UPDATE a data config
router.patch('/:id', generic_1.default.update(Generic_1.default));
// DELETE a data config
router.delete('/:id', generic_1.default.deleteOne(Generic_1.default));
module.exports = router;
