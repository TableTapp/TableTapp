import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt';

const { isEmail } = require('validator');

export interface IUserBase {
    Email: string;
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    verify(password: string): Promise<boolean>;
};

export interface IUser extends IUserBase, Document { };

const UserSchema: Schema = new Schema(
    {
        Email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        Username: {
            type: String,
            required: false,
            unique: true,
            lowercase: true
        },
        Password: {
            type: String,
            required: true,
            minlength: [8, 'Password must be at least 8 characters long']
        },
        Name: {
            type: String,
            required: true
        },
        Phone: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.Password = await bcrypt.hash(this.Password, salt);
    if (!this.Username) {
        this.Username = this.Email;
    }
    next();
});

UserSchema.methods.verify = async function(password: string) {
    try {
        return await bcrypt.compare(password, this.Password);
    } catch (error) {
        throw Error("Unexpected error");
    }
}

export default mongoose.model<IUserBase>('User', UserSchema);