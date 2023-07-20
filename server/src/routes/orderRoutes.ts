import express from 'express';
import controller from '../controllers/generic';
import Order from '../models/Order';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(Order));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(Order));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(Order));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(Order));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(Order));

export = router;