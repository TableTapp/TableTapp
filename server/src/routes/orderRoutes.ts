import express from 'express';
import controller from '../controllers/generic';
import Order from '../models/Order';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Order));

// GET single data config 
router.get('/:id', controller.get(Order));

// POST new data config
router.post('/', controller.create(Order));

// UPDATE a data config
router.patch('/:id', controller.update(Order));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Order));

export = router;