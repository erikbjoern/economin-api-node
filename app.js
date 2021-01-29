const express = require("express");
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
const { PrismaClient } = require("@prisma/client");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const db = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({
    ...req,
    db
  })
})

const app = express();

app.use(bodyParser.json());

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("Go to http://localhost:3000/graphiql to run queries!");
});
