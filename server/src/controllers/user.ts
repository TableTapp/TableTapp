import { Request, Response, NextFunction } from 'express';

const getUser = async (req: Request, res: Response) => {
    res.status(200).json(req.body);
}

export default {
    getUser
}