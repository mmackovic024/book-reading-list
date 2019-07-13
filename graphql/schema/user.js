const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    password: String
    email: String
    bookCount: Int
    books: [Book]
  }

  input UserInput {
    username: String!
    password: String!
    email: String
  }

  extend type Query {
    getUsers: [User]!
    getUser(name: String!): User
    getMe: User
  }

  extend type Mutation {
    createUser(userInput: UserInput): User
    deleteUser(id: ID!): Boolean!
    addBookToList(bookId: ID!): Boolean!
  }
`;
