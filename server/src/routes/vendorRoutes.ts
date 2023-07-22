import express from 'express';
import controller from '../controllers/generic';
import Vendor from '../models/Vendor';
import auth from '../middleware/auth';

const router = express.Router();

// GET all data config 
router.get('/', auth.verifyAccessToken, controller.getAll(Vendor));

// GET single data config 
router.get('/:id', auth.verifyAccessToken, controller.get(Vendor));

// POST new data config
router.post('/', auth.verifyAccessToken, controller.create(Vendor));

// UPDATE a data config
router.patch('/:id', auth.verifyAccessToken, controller.update(Vendor));

// DELETE a data config
router.delete('/:id', auth.verifyAccessToken, controller.deleteOne(Vendor));

export = router;