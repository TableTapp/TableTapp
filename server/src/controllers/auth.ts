import { Request, Response } from 'express';
import User from '../models/User';
import authUtils from '../middleware/auth';
import dotenv from 'dotenv';

dotenv.config();
const COOKIE_AGE = parseInt(process.env.COOKIE_AGE || '0');

enum SigninMsgs {
	SignInSuccess = "Sign in successful.",
	IncorrectUsername = "Invalid username. Please try again.",
	IncorrectPassword = "Incorrect Password. Please try again."
};

const postSignup = async (req: Request, res: Response) => {
	try {
		const user = await User.create(req.body);
		const accessToken = authUtils.createAccessToken(user._id);
		const refreshToken = authUtils.createRefreshToken(user._id);
		res.cookie('jwt', refreshToken, {
			httpOnly: true,
			maxAge: COOKIE_AGE
		});
		res.status(200).json({
			User: user._id,
            Message: SigninMsgs.SignInSuccess,
            Token: accessToken
		});
	} catch (error: any) {
		const errors = getSignupErrors(error);
		res.status(400).json({
			error
		});
	}
}

const postSignin = async (req: Request, res: Response) => {
	const { Username, Password } = req.body;
	try {
		const user = await User.findOne({Username});
		if (!user) throw Error(SigninMsgs.IncorrectUsername);

		const verified = await user.verify(Password);
		if (!verified) throw Error(SigninMsgs.IncorrectUsername);

		const accessToken = authUtils.createAccessToken(user._id);
		const refreshToken = authUtils.createRefreshToken(user._id);

		res.cookie('jwt', refreshToken, {
			httpOnly: true,
			maxAge: COOKIE_AGE
		});
		res.status(200).json({
			User: user._id,
			Message: SigninMsgs.SignInSuccess,
            Token: accessToken
		});

	} catch (error: any) {
		res.status(400).json({
			error
		});
	}
}

const postSignout = async (req: Request, res: Response) => {
	res.cookie('jwt', '', {
		maxAge: 1
	});
	res.status(200).json({
		Message: "Signed out succesfully."
	})
}

function getSignupErrors(err: any) {
	let errors = {
		name: '',
		email: '',
		username: '',
		password: ''
	};
	// if (err.message.toLowerCase().includes('user validation failed')) {
	// 	Object.values(err.errors).forEach(({ properties }) => {
	// 		errors[properties.path] = properties.message;
	// 	});
	// }
	// if (err.code === 11000) {
	// 	errors.email = 'An account already exists with that email';
	// }
	return errors;
}

export default {
	postSignup,
	postSignin,
	postSignout
};