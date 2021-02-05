const createBudget = async (parent, { input }, context) => {
  const idFromStartDate = () => {
    const year = input.startYear.toString()
    const month = (input.startMonth + 1).toString().padStart(2, "0")
    const day = input.startDay.toString().padStart(2, "0")

    return parseInt(year + month + day)
  }

  const id = idFromStartDate()

  const newBudget = await context.db.budgets.create({
    data: {
      id,
      ...input,
    },
  });

  return newBudget;
};

module.exports = createBudget;
