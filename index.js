const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const budgets = [
  {
    id: 1,
    amount: 2000,
    startDate: "09 Sep 2020",
    endDate: "08 Oct 2020"
  },
  {
    id: 2,
    amount: 5000,
    startDate: "09 Oct 2020",
    endDate: "08 Nov 2020"
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { budgets: [Budget] }
  type Budget { id: Int, amount: Int, startDate: String, endDate: String }
`;

// The resolvers
const resolvers = {
  Query: { budgets: () => budgets },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});