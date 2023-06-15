import express from 'express';
import controller from '../controllers/generic';
import Customer from '../models/Customer';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Customer));

// GET single data config 
router.get('/:id', controller.get(Customer));

// POST new data config
router.post('/', controller.create(Customer));

// UPDATE a data config
router.patch('/:id', controller.update(Customer));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Customer));

export = router;