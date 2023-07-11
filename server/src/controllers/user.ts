import { Request, Response } from 'express';
import User from '../models/User';

const getUser = async (req: Request, res: Response) => {
    const user = await User.findById(req.headers['user']);
	res.status(200).json(user);
}

export default {
    getUser
}