import express from 'express';
import controller from '../controllers/generic';
import Menu from '../models/Menu';

const router = express.Router();

// GET all data config 
router.get('/', controller.getAll(Menu));

// GET single data config 
router.get('/:id', controller.get(Menu));

// POST new data config
router.post('/', controller.create(Menu));

// UPDATE a data config
router.patch('/:id', controller.update(Menu));

// DELETE a data config
router.delete('/:id', controller.deleteOne(Menu));

export = router;