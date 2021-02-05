const getCurrentBudget = async (parent, args, context) => {
  const currentBudget = await context.db.budgets.findFirst({
    orderBy: {
      id: "desc"
    },
  });

  return currentBudget;
};

module.exports = getCurrentBudget;
