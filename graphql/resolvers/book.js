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
      return models.Book.update(
        { title: title, author: author },
        { where: { id: id }, returning: true, plain: true }
      )
        .then(res => res[1])
        .catch(err => err);
    },
    addRating: (_, { id, rating }, { models, me }) => {
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
    avgRating: book =>
      book.rating.length > 0
        ? (
            book.rating.reduce((acc, curr) => acc + +curr) / book.rating.length
          ).toFixed(1)
        : 0,
    readCount: book => book.getUsers().then(users => users.length),
    users: book => book.getUsers()
  }
};
