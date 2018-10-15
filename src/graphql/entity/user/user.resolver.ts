import { getUser, getUsers } from "../../../business"
import { serialize } from "../../utils"

const query = {
  user: async (parent, { id }) => {
    const params = { id }
    const user = await getUser({ params })

    return serialize(user)
  },
  users: async (parent, { limit = 10, skip }) => {
    const params = { limit, skip }
    const users = await getUsers({ params })

    return serialize(users)
  }
};

export default {
  Query: query
}
