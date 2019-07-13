module.exports = {
  Query: {
    Books: (_, __, { models }) => {
      return models.Book.findAll({ include: ['users'] })
        .then(res => res)
        .catch(err => err);
    }
  },
  Mutation: {
    createBook: (_, { bookInput }, { models, me }) => {
      if (!me) throw new Error('Not logged in!');
      return models.Book.findOrCreate({
        where: {
          title: bookInput.title
        },
        defaults: {
          author: bookInput.author,
          rating: [bookInput.rating]
        }
      })
        .then(([book, created]) => {
          if (created) {
            return book;
          } else {
            throw new Error('Book title already exists');
          }
        })
        .catch(err => err);
    },
    editBook: (_, { id, title, author }, { models, me }) => {
      if (!me) throw new Error('Not logged in!');
      return models.Book.update(
        { title: title, author: author },
        { where: { id: id }, returning: true, plain: true }
      )
        .then(res => res[1])
        .catch(err => err);
    },
    addRating: (_, { id, rating }, { models, me }) => {
      if (!me) throw new Error('Not logged in!');
      return models.Book.findOne({ where: { id: id } })
        .then(book => {
          book.rating = rating;
          book.save();
          return book;
        })
        .then(res => res)
        .catch(() => {
          throw new Error('Book not found');
        });
    }
  },
  Book: {
    readCount: book => book.getUsers().then(users => users.length),
    users: book => book.getUsers()
  }
};
