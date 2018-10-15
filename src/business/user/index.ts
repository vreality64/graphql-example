import { User } from "../../model"
import { isValidMongoID } from "../utils"
import mock from "./mock"

export async function getUser({ params }) {
  const { id } = params

  if (isValidMongoID(id)) {
    // return await User.findById(id)
    return mock[id] || null
  }

  return null
}

export async function getUsers({ params }) {
  const { filter = {}, limit, skip } = params
  const query = User.find(filter)

  limit && query.limit(limit)
  skip && query.skip(skip)

  // return await query.exec()
  return mock
}
