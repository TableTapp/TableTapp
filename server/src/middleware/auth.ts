import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';
import { Types } from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'MISSING_SECRET';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'MISSING_SECRET';
const COOKIE_AGE = parseInt(process.env.COOKIE_AGE || '0');

const createAccessToken = (id: Types.ObjectId) => {
	return jwt.sign({ id }, JWT_ACCESS_SECRET, {
		expiresIn: '5s'
	});
}

const createRefreshToken = (id: Types.ObjectId) => {
	return jwt.sign({ id }, JWT_REFRESH_SECRET, {
		expiresIn: '1y'
	});
}

const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    if (token == null) res.status(401).json({ Error: "JWT token not found." });
	jwt.verify(token, JWT_ACCESS_SECRET, async (error: any, decodedToken: any) => {
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

const verifyRefreshToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.refresh;
    if (token == null) res.status(401).json({ Error: "Refresh token not found." });
	jwt.verify(token, JWT_REFRESH_SECRET, async (error: any, decodedToken: any) => {
		if (error) res.status(403).json(error);
		const accessToken = createAccessToken(decodedToken.id);
		res.cookie('jwt', accessToken, {
			httpOnly: true,
			maxAge: COOKIE_AGE
		});
		req.headers.authorization = accessToken;
		next();
	});
}

// const getDecodedToken = (req: Request) => {
// 	try {
// 		const token = req.cookies.jwt;
// 		return <jwt.JwtPayload>jwt.verify(token, JWT_SECRET);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

export default {
	createAccessToken,
	createRefreshToken,
	verifyAccessToken,
	verifyRefreshToken
};