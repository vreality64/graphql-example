import { Document, Schema, model, Model } from "mongoose"

export interface UserModel extends Document {
    _id: string
    type: string
    name: string
    profileImage: string
}

const schema = new Schema({
    type: {
        type: String,
        default: 'line',
    },
    name: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    }
})

export const user: Model<UserModel> = model<UserModel>('User', schema)