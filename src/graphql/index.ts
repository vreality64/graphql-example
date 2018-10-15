import { makeExecutableSchema } from "apollo-server-koa"
import { typeDefs, resolvers } from "./entity"

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
