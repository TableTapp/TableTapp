import { Request, Response } from 'express';

const getUser = async (req: Request, res: Response) => {
	res.status(200).json(req.user);
}

export default {
    getUser
}