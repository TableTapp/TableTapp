import express from 'express';
import controller from '../controllers/generic';
import OrderItem from '../models/OrderItem';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(OrderItem));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(OrderItem));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(OrderItem));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(OrderItem));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(OrderItem));

export = router;