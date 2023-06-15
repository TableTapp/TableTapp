import express from 'express';
import controller from '../controllers/generic';
import Cart from '../models/Cart';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Cart));

// GET single data config 
router.get('/:id', controller.get(Cart));

// POST new data config
router.post('/', controller.create(Cart));

// UPDATE a data config
router.patch('/:id', controller.update(Cart));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Cart));

export = router;