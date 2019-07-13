module.exports = {
  Query: {
    getUsers: (_, __, { models }) => {
      return models.User.findAll({ include: ['books'] })
        .then(users => users)
        .catch(err => err);
    },
    getUser: (_, { name }, { models }) => {
      return models.User.findOne({
        where: { username: name },
        include: ['books']
      })
        .then(res => res)
        .catch(err => err);
    },
    getMe: (_, __, { models, me }) => {
      return me;
    }
  },
  Mutation: {
    createUser: (_, { userInput }, { models }) => {
      return models.User.findOrCreate({
        where: {
          username: userInput.username
        },
        defaults: {
          password: userInput.password,
          email: userInput.email
        }
      })
        .then(([user, created]) => {
          if (created) {
            return user;
          } else {
            throw new Error('Username already exists');
          }
        })
        .catch(err => err);
    },
    deleteUser: (_, { id }, { models }) => {
      return models.User.destroy({
        where: {
          id: id
        }
      })
        .then(deleted => {
          if (deleted) {
            return true;
          } else {
            throw new Error('Unknown username');
          }
        })
        .catch(err => err);
    },
    addBookToList: (_, { bookId }, { models, me }) => {
      if (!me) throw new Error('Not logged in!');
      return models.User.findOne({ where: { id: me.id } })
        .then(user =>
          user
            .addBook(bookId)
            .then(() => true)
            .catch(err => 'Error adding book to list ==> ' + err)
        )
        .catch(err => 'Error finding user ==> ' + err);
    }
  },
  User: {
    bookCount: user => user.getBooks().then(books => books.length),
    books: user => user.getBooks()
  }
};
