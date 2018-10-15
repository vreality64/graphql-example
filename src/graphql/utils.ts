/**
 * Serialize object.
 * For now, it has specific purpose.
 *
 * MongoID should be serialized to normal string id to working well
 * this issue will be solve `graphql-js@14.1.0` release through `toJSON`
 *  Ref: https://github.com/graphql/graphql-js/pull/1520
 *
 * @param data object
 */
export function serialize(data) {
  if (!data) {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(serialize)
  }

  if (typeof data.toObject !== "function") {
    return data
  }

  return {
    ...data.toObject(),
    id: data._id ? data._id.toString() : null
  }
}
