# Hello GraphQL Server

Simple GraphQL server with Express and Apollo.

## Env vars

* PORT (default 3000)
* SERVERNAME (default '')

## Schema

```javascript
const typeDefs = `
  type Query { hello: String }
`;

const resolvers = {
  Query: { hello: () => `Hello from ${SERVERNAME} Server` }
};
```

## Example

* `$ PORT=4000 SERVERNAME=Alfa npm start`
* http://localhost:4000/graphiql
