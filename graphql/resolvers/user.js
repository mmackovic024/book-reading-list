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
    getMe: (_, __, { me }) => {
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
    editUser: (_, { userInput }, { me }) => {
      if (!me) throw new Error('Not logged in!');
      return me
        .update({
          username: userInput.username,
          password: userInput.password,
          email: userInput.email
        })
        .then(user => user)
        .catch(err => err);
    },
    deleteUser: (_, __, { me }) => {
      if (!me) throw new Error('Not logged in!');
      return me
        .destroy()
        .then(() => {})
        .catch(err => err);
    },
    addBookToList: (_, { bookId }, { me }) => {
      if (!me) throw new Error('Not logged in!');
      return me
        .addBook(bookId)
        .then(() => true)
        .catch(err => 'Error adding book to list ==> ' + err);
    },
    removeBookFromList: (_, { bookId }, { me }) => {
      if (!me) throw new Error('Not logged in!');
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
