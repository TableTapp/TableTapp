import express from 'express';
import controller from '../controllers/generic';
import generic from '../models/Generic';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(generic));

// GET single data config 
router.get('/:id', controller.get(generic));

// POST new data config
router.post('/', controller.create(generic));

// UPDATE a data config
router.patch('/:id', controller.update(generic));

// DELETE a data config
router.delete('/:id', controller.deleteOne(generic));

export = router;