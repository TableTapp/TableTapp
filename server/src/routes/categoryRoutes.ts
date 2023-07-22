import express from 'express';
import controller from '../controllers/generic';
import Category from '../models/Category';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Category));

// GET single data config 
router.get('/:id', controller.get(Category));

// POST new data config
router.post('/', controller.create(Category));

// UPDATE a data config
router.patch('/:id', controller.update(Category));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Category));

export = router;