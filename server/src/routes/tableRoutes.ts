import express from 'express';
import controller from '../controllers/generic';
import Table from '../models/Table';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(Table));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(Table));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(Table));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(Table));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(Table));

export = router;