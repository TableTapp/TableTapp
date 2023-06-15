import express from 'express';
import controller from '../controllers/generic';
import Vendor from '../models/Vendor';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Vendor));

// GET single data config 
router.get('/:id', controller.get(Vendor));

// POST new data config
router.post('/', controller.create(Vendor));

// UPDATE a data config
router.patch('/:id', controller.update(Vendor));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Vendor));

export = router;