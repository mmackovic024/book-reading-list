'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 15]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      }
    },
    {}
  );
  User.associate = function(models) {
    User.belongsToMany(models.Book, {
      through: 'BookLists',
      foreignKey: 'userId',
      as: 'books'
    });
  };
  return User;
};
