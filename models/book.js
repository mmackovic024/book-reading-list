'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      rating: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        set(val) {
          const prevRating = this.getDataValue('rating');
          if (!prevRating) {
            return this.setDataValue('rating', [val]);
          } else {
            return this.setDataValue('rating', [...prevRating, val]);
          }
        }
      }
    },
    {}
  );
  Book.associate = function(models) {
    Book.belongsToMany(models.User, {
      through: 'BookLists',
      foreignKey: 'bookId',
      as: 'users'
    });
  };
  return Book;
};
