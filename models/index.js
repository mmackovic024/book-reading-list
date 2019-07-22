const Sequelize = require('sequelize');

let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' });
} else {
  sequelize = new Sequelize(
    process.env.DATABASE || 'ReadingList',
    process.env.DATABASE_USER || 'postgres',
    process.env.DATABASE_PASS || 'postgres',
    {
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  );
}

const models = {
  User: sequelize.import('./user.js'),
  Book: sequelize.import('./book.js'),
  BookList: sequelize.import('./booklist.js')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
