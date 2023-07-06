import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'SECRET', (error: any, decodedToken: any) => {
            console.log(decodedToken.userId);
            next();
        });

    } else {
        res.redirect('/login');
    }
}

module.exports = {
    verifyAuth: verifyToken
}