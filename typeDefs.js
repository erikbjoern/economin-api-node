const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Budget {
    amount: Int, 
    startDate: String, 
    endDate: String 
  }
  input CreateBudgetInput {
    amount: Int,
    startDate: String,
    endDate: String
  }
  type Query {
    budgets: String
  }
  type Mutation { 
    createBudget(input: CreateBudgetInput): Budget 
  }
`

module.exports = typeDefs;