const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    password: String!
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
    createUser(userInput: UserInput): User!
    editUser(userInput: UserInput): User!
    deleteUser: Boolean!
    addBookToList(bookId: ID!): Boolean!
    removeBookFromList(bookId: ID!): Boolean!
  }
`;
