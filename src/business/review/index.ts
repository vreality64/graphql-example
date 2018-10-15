import { Review } from "../../model"
import { isValidMongoID } from "../utils"
import mock from "./mock"

export async function getReview({ params }) {
  const { id } = params

  if (isValidMongoID(id)) {
    // return await Review.findById(id)
    return mock[id] || null
  }

  return null
}

export async function getReviews({ params }) {
  const { filter = {}, limit, skip } = params
  const query = Review.find(filter)

  limit && query.limit(limit)
  skip && query.skip(skip)

  // return await query.exec()
  return mock
}
