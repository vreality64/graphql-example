# graphql-example
simple graphql example

## Start Server
```sh
# server -  http://localhost:4000
# playground -  http://localhost:4000/graphql
yarn server
```

## GraphQL Directory Structure

```text
graphql/
├── entity
│   ├── index.ts
│   ├── review
│   │   ├── review.graphql
│   │   └── review.resolver.ts
│   └── user
│       ├── user.graphql
│       └── user.resolver.ts
├── index.ts
└── utils.ts

3 directories, 7 files

```

- `entity` folder
  - structured based on entity level abstraction
    - has `GraphQL Type Definition`
    - has `GraphQL Resolver`
  - has posibillity of full graphql syntax support
    - not `ts` but `.graphql` files
  - expose `typeDefs` and `resolvers`
- `index.ts` file
  - expose executable schema through `makeExecutableSchema` function



## Design Rule

1. Focus on abstracted API
   - API should be abstracted. It doesn't care about concrete implementation or product
   - eg: GraphQL should not be affected by what database is used
2. Focus on Graph Model
   - Data should be consumed by entity level
   - It means that normalizing data model is required.