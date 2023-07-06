import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { Types } from 'mongoose';

const getUserId = (req: Request, res: Response) => {
	try {
		const decodedToken = getDecodedToken(req);
		res.status(200).send(decodedToken);
	} catch (error) {
		console.log(error);
	}
}

const createToken = (id: Types.ObjectId) => {
	return jwt.sign({ id }, 'SECRET', {
		expiresIn: 24 * 60 * 60
	});
}

const getDecodedToken = (req: Request) => {
	try {
		const token = req.cookies.jwt;
		return jwt.verify(token, 'SECRET');
	} catch (error) {
		console.log(error);
	}
}

export default {
	getUserId,
	createToken,
	getDecodedToken
};