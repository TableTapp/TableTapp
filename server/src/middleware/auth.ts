import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';
import { Types } from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'MISSING_SECRET';

const createToken = (id: Types.ObjectId) => {
	return jwt.sign({ id }, JWT_SECRET, {
		expiresIn: 24 * 60 * 60
	});
}

const getDecodedToken = (req: Request) => {
	try {
		const token = req.cookies.jwt;
		return <jwt.JwtPayload>jwt.verify(token, JWT_SECRET);
	} catch (error) {
		console.log(error);
	}
}

const verifyJwtToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    if (token == null) res.status(401).json({ Error: "JWT token not found." });
	jwt.verify(token, JWT_SECRET, async (error: any, decodedToken: any) => {
		if (error) res.status(403).json(error);
		const user = await User.findById(decodedToken.id);
		if (user) {
			req.user = user;
			next();
		}
		else {
			res.status(404).json({ Error: "User not found." })
		}
	});
}

export default {
	createToken,
	getDecodedToken,
	verifyJwtToken
};