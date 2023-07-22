import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';
import { Types } from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'MISSING_SECRET';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'MISSING_SECRET';
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || 'MISSING_SECRET';
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || 'MISSING_SECRET';

const createAccessToken = (id: Types.ObjectId) => {
	return jwt.sign({ id }, JWT_ACCESS_SECRET, {
		expiresIn: `${ACCESS_TOKEN_EXPIRY}`
	});
}

const createRefreshToken = (id: Types.ObjectId) => {
	return jwt.sign({ id }, JWT_REFRESH_SECRET, {
        expiresIn: `${REFRESH_TOKEN_EXPIRY}`
	});
}

const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access;
    if (token == null) 
        return res.status(401).json({ Error: 'Access token not found' });
	jwt.verify(token, JWT_ACCESS_SECRET, async (error: any, decodedToken: any) => {
        if (error) 
            return res.status(403).json(error);
		const user = await User.findById(decodedToken.id);
		if (user) {
            req.body = {
                ...req.body,
                user: user,
            };
			return next();
		}
        return res.status(404).json({ Error: 'User not found' });
	});
}

const getAccessToken = (req: Request, res: Response) => {
    const refreshToken = req.cookies.jwt;
    if (refreshToken == null) 
        return res.status(401).json({ Error: "Refresh token not found." });
	jwt.verify(refreshToken, JWT_REFRESH_SECRET, async (error: any, decodedToken: any) => {
		if (error) 
            return res.status(403).json(error);
		const accessToken = createAccessToken(decodedToken.id);
        return res.status(200).json({Token: accessToken});
	});
}

export default {
	createAccessToken,
	createRefreshToken,
	verifyAccessToken,
	getAccessToken
};