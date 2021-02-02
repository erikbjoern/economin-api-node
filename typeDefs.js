const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum UnitOfTime {
    DAYS
    MONTHS
  }

  type Budget {
    id: Int,
    amount: Int, 
    startDay: Int, 
    startMonth: Int,
    startYear: Int,
    length: Int,
    unit: UnitOfTime,
    recurring: Boolean
  }

  input CreateBudgetInput {
    amount: Int, 
    startDay: Int, 
    startMonth: Int,
    startYear: Int,
    length: Int,
    unit: UnitOfTime,
    recurring: Boolean
  }

  type Query {
    currentBudget: Budget
  }
  
  type Mutation { 
    createBudget(input: CreateBudgetInput): Budget 
  }
`

module.exports = typeDefs;