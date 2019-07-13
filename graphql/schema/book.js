const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    rating: [Int]!
    readCount: Int
    users: [User]
  }

  input BookInput {
    title: String!
    author: String!
    rating: Int!
  }

  extend type Query {
    getBooks: [Book]!
  }

  extend type Mutation {
    createBook(bookInput: BookInput): Book!
    editBook(id: ID!, tile: String, author: String): Book!
    deleteBook(id: ID!): Boolean!
    addRating(id: ID!, rating: Int!): Book!
  }
`;
