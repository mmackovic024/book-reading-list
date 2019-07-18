const jwt = require('jsonwebtoken');

const createToken = async (user, secret, exp) => {
  const { id, username, email } = user;
  return await jwt.sign({ id, username, email }, secret, { expiresIn: exp });
};

module.exports = {
  Query: {
    Users: (_, __, { models }) => {
      return models.User.findAll({ include: ['books'] })
        .then(users => users)
        .catch(err => err);
    },
    User: (_, { name }, { models }) => {
      return models.User.findOne({
        where: { username: name },
        include: ['books']
      })
        .then(user => {
          return user;
        })
        .catch(err => err);
    },
    Me: (_, __, { models, me }) => {
      if (!me) return null;
      return models.User.findByPk(me.id)
        .then(me => me)
        .catch(e => e);
    }
  },
  Mutation: {
    signUp: (_, { userInput }, { models, secret }) => {
      return models.User.findOrCreate({
        where: { username: userInput.username },
        defaults: {
          password: userInput.password,
          email: userInput.email
        }
      })
        .then(([user, created]) => {
          if (!created) throw new Error('Username already exists');
          return { token: createToken(user, secret, '2h') };
        })
        .catch(err => err);
    },
    signIn: async (_, { username, password }, { models, secret }) => {
      const user = await models.User.findOne({ where: { username: username } });
      if (!user) throw new Error('Username not found');
      const isValid = await user.validatePassword(password, user.password);
      if (!isValid) throw new Error('Invalid password');
      return { token: createToken(user, secret, '2h') };
    },
    editUser: (_, { userInput }, { me, secret }) => {
      return me
        .update({
          username: userInput.username,
          password: userInput.password,
          email: userInput.email
        })
        .then(user => ({ token: createToken(user, secret, '2h') }))
        .catch(err => err);
    },
    deleteUser: (_, __, { me }) => {
      return me
        .destroy()
        .then(() => true)
        .catch(err => err);
    },
    addBookToList: (_, { bookId }, { me }) => {
      return me
        .addBook(bookId)
        .then(() => true)
        .catch(err => 'Error adding book to list ==> ' + err);
    },
    removeBookFromList: (_, { bookId }, { me }) => {
      return me
        .removeBook(bookId)
        .then(() => true)
        .catch(err => 'Error removing book from list ==> ' + err);
    }
  },
  User: {
    bookCount: user => user.getBooks().then(books => books.length),
    books: user => user.getBooks()
  }
};
