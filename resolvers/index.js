const createBudget = require("./mutations/createBudget");

module.exports = {
  Query: {
    budgets: () => "This function is not implemented yet. Sorry."
  },
  Mutation: {
    createBudget,
  },
};
