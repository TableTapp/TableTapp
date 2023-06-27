import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt';

export interface IUserBase {
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    Email: string;
};

export interface IUser extends IUserBase, Document { };

const UserSchema: Schema = new Schema(
    {
        Username: {
            type: String,
            required: true
        },
        Password: {
            type: String,
            require: true
        },
        Name: {
            type: String,
            require: true
        },
        Phone: {
            type: String,
            require: false
        },
        Email: {
            type: String,
            require: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    if (!this.username) {
        this.username = this.email;
    }
    next();
});

UserSchema.methods.matchPassword = async function (password: string) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw Error("Incorrect Password");
    }
}

export default mongoose.model<IUserBase>('User', UserSchema);