import * as Koa from "koa"
import { ApolloServer } from "apollo-server-koa"
import schema from "./graphql"

const app = new Koa();
const port = process.env.PORT || 4000
const apolloServer = new ApolloServer({
  schema,
})

apolloServer.applyMiddleware({ app })
app.listen(port)

console.log(`server is running at http://localhost:${port}`)