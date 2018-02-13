const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const app = express();
const SERVERNAME = process.env.SERVERNAME || '';

const typeDefs = `
  type Query { hello: String }
`;

const resolvers = {
    Query: { hello: () => `Hello from ${SERVERNAME} Server` },
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${SERVERNAME} running http://localhost:${PORT}/graphiql`);
});
