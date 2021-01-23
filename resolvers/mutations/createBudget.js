const models = require("../../models");

const createBudget = async (parent, { input }) => {
  const newBudget = await models.Budget.create(input);

  return newBudget
};

module.exports = createBudget;
