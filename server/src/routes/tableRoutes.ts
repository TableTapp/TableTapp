import express from 'express';
import controller from '../controllers/generic';
import Table from '../models/Table';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Table));

// GET single data config 
router.get('/:id', controller.get(Table));

// POST new data config
router.post('/', controller.create(Table));

// UPDATE a data config
router.patch('/:id', controller.update(Table));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Table));

export = router;