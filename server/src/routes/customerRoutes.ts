import express from 'express';
import controller from '../controllers/generic';
import Customer from '../models/Customer';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(Customer));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(Customer));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(Customer));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(Customer));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(Customer));

export = router;