import { Types } from "mongoose"

export function isValidMongoID(id: string | number) {
  return Types.ObjectId.isValid(id)
}
