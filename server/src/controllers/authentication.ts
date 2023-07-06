import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import authConfig from '../config/authentication';


const postSignup = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const user = await User.create(req.body);
		const token = authConfig.createToken(user._id);
		res.cookie('jwt', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000
		});
		res.status(200).json({
			user: user._id
		});
	} catch (error) {
		// const errors = handleErrors(error);
		res.status(400).json({
			error
		});
		console.log(error);
	}
}

const postSignin = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({username});
		if (!user) throw Error('User does not exist');
		const verified = await user.verify(password);
		if (!verified) throw Error('Incorrect password');

		const token = authConfig.createToken(user._id);
		res.cookie('jwt', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000
		});
		res.status(200).json({
			user: user._id
		});
	} catch (error) {
		res.status(400).json({error});
	}
}

// function handleErrors(err) {
// 	let errors = {
// 		name: '',
// 		email: '',
// 		username: '',
// 		password: ''
// 	};
// 	if (err.message.toLowerCase().includes('user validation failed')) {
// 		Object.values(err.errors).forEach(({ properties }) => {
// 			errors[properties.path] = properties.message;
// 		});
// 	}
// 	if (err.code === 11000) {
// 		errors.email = 'An account already exists with that email';
// 	}
// 	return errors;
// }

export default {
	postSignup,
	postSignin
};