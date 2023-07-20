import express from 'express';
import controller from '../controllers/generic';
import Cart from '../models/Cart';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(Cart));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(Cart));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(Cart));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(Cart));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(Cart));

export = router;