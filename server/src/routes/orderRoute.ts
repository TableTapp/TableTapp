import express from 'express';
import controller from '../controllers/Generic';
import OrderModel from '../models/OrderModel';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(OrderModel));

// GET single data config 
router.get('/:id', controller.get(OrderModel));

// POST new data config
router.post('/', controller.create(OrderModel));

// UPDATE a data config
router.patch('/:id', controller.update(OrderModel));

// DELETE a data config
router.delete('/:id', controller.deleteOne(OrderModel));

export = router;