import { Document, Schema, model, Model } from "mongoose"

export interface ReviewModel extends Document {
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

export const review: Model<ReviewModel> = model<ReviewModel>('Review', schema)