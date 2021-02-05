const createBudget = require("./mutations/createBudget");
const currentBudget = require("./queries/currentBudget");

module.exports = {
  Query: {
    currentBudget
  },
  Mutation: {
    createBudget,
  },
};
