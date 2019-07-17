'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Empty username not allowed'
          },
          len: {
            args: [3, 15],
            msg: 'Enter username 3 - 15 characters long'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Empty password not allowed'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Not a valid email'
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate: async user => {
          return (user.password = await user.generateHash());
        },
        beforeUpdate: async user => {
          return (user.password = await user.generateHash());
        }
      }
    }
  );

  User.associate = models => {
    User.belongsToMany(models.Book, {
      through: 'BookLists',
      foreignKey: 'userId',
      as: 'books'
    });
  };

  User.prototype.generateHash = async function() {
    const salt = 10;
    return await bcrypt.hash(this.password, salt);
  };

  User.prototype.validatePassword = async function(pass) {
    return await bcrypt.compare(pass, this.password);
  };

  return User;
};
