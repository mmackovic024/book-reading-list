'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookList = sequelize.define(
    'BookList',
    {
      userId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER
    },
    {}
  );
  BookList.associate = function(models) {
    BookList.belongsTo(models.User, { foreignKey: 'userId' });
    BookList.belongsTo(models.Book, { foreignKey: 'bookId' });
  };
  return BookList;
};
