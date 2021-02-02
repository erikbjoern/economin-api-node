const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum UnitOfTime {
    DAYS
    MONTHS
  }

  type Budget {
    amount: Int, 
    startDate: Int, 
    startMonth: Int,
    startYear: Int,
    length: Int,
    unit: UnitOfTime,
    recurring: Boolean
  }

  input CreateBudgetInput {
    amount: Int, 
    startDate: Int, 
    startMonth: Int,
    startYear: Int,
    length: Int,
    unit: UnitOfTime,
    recurring: Boolean
  }

  type Query {
    budgets: String
  }
  
  type Mutation { 
    createBudget(input: CreateBudgetInput): Budget 
  }
`

module.exports = typeDefs;