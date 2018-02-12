const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const app = express();

const typeDefs = `
  type Query { helloworld: String }
`;

const resolvers = {
    Query: { helloworld: () => "Hello Apollo Server!" },
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

app.use('/graphql',
    cors(),
    bodyParser.json(),
    graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
