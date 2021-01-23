const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Budget {
    amount: Int, 
    start_date: String, 
    end_date: String 
  }
  input CreateBudgetInput {
    amount: Int,
    start_date: String,
    end_date: String
  }
  type Query {
    budgets: String
  }
  type Mutation { 
    createBudget(input: CreateBudgetInput): Budget 
  }
`

module.exports = typeDefs;