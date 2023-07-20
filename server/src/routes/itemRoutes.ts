import express from 'express';
import controller from '../controllers/generic';
import Item from '../models/Item';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(Item));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(Item));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(Item));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(Item));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(Item));

export = router;