import { getReview, getReviews } from "../../../business"
import { serialize } from "../../utils"

const query = {
  review: async (parent, { id }) => {
    const params = { id }
    const review = await getReview({ params })

    return serialize(review)
  },
  reviews: async (parent, { limit = 10, skip }) => {
    const params = { limit, skip }
    const reviews = await getReviews({ params })

    return serialize(reviews)
  }
};

export default {
  Query: query
}
