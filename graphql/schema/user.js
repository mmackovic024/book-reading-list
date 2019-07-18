const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String
    bookCount: Int
    books: [Book]
  }

  type Token {
    token: String!
  }

  input UserInput {
    username: String!
    password: String!
    email: String
  }

  extend type Query {
    Users: [User]!
    User(name: String!): User
    Me: User
  }

  extend type Mutation {
    signUp(userInput: UserInput): Token!
    signIn(username: String!, password: String!): Token!
    editUser(userInput: UserInput): Token!
    deleteUser: Boolean!
    addBookToList(bookId: ID!): Boolean!
    removeBookFromList(bookId: ID!): Boolean!
  }
`;
