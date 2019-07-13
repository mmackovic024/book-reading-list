const { gql } = require('apollo-server-express');

const userSchema = require('./user');
const bookSchema = require('./book');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

module.exports = [linkSchema, userSchema, bookSchema];
