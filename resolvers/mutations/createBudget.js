const createBudget = async (parent, { input }, context) => {
  const newBudget = await context.db.budgets.create({ data: input });

  return newBudget;
};

module.exports = createBudget;
