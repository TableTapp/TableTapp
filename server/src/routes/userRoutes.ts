import express from 'express';
import userController from '../controllers/user';
import auth from '../middleware/auth';

const router = express.Router();

router.get('/user', auth.verifyJwtToken , userController.getUser);

export = router;