const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    rating: [Int]!
    avgRating: String
    readCount: Int
    users: [User]
  }

  input BookInput {
    title: String!
    author: String!
    rating: Int!
  }

  extend type Query {
    Books: [Book]!
  }

  extend type Mutation {
    createBook(bookInput: BookInput): Book!
    editBook(id: ID!, tile: String, author: String): Book!
    addRating(id: ID!, rating: Int!): Book!
  }
`;
