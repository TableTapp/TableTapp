import express from 'express';
import controller from '../controllers/generic';
import OrderItem from '../models/OrderItem';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(OrderItem));

// GET single data config 
router.get('/:id', controller.get(OrderItem));

// POST new data config
router.post('/', controller.create(OrderItem));

// UPDATE a data config
router.patch('/:id', controller.update(OrderItem));

// DELETE a data config
router.delete('/:id', controller.deleteOne(OrderItem));

export = router;