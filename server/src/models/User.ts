import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt';

export interface IUserBase {
    Username: string;
    Password: string;
    Name: string;
    Phone: string;
    matchPassword(password: string): Promise<boolean>;
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
            required: true
        },
        Name: {
            type: String,
            required: false
        },
        Phone: {
            type: String,
            required: false
        },
        Email: {
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

UserSchema.methods.matchPassword = async function (password: string) {
    try {
        return await bcrypt.compare(password, this.Password);
    } catch (error) {
        throw Error("Incorrect Password");
    }
}

export default mongoose.model<IUserBase>('User', UserSchema);