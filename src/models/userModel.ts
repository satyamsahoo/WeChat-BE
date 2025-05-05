import { Schema, model } from "mongoose";

interface IUser {
    firstName: string,
    lastName: string,
    phoneNumber: number,
    age: number
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
})

export const User = model<IUser>('user-details', userSchema)