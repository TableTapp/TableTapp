import express from 'express';
import controller from '../controllers/generic';
import Item from '../models/Item';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Item));

// GET single data config 
router.get('/:id', controller.get(Item));

// POST new data config
router.post('/', controller.create(Item));

// UPDATE a data config
router.patch('/:id', controller.update(Item));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Item));

export = router;