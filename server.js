const express = require('express');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const cors = require('cors');
const bodyParser = require('body-parser');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const models = require('./models');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'secretfortoken';

const getMe = async req => {
  const token = req.headers['authentication']
    ? req.headers['authentication'].split(' ')[1]
    : undefined;

  if (token) {
    try {
      return await jwt.verify(token, secret);
    } catch (e) {
      throw new AuthenticationError('Session expired, sign in again.');
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    const myToken = await getMe(req);
    const me = myToken ? await models.User.findByPk(myToken.id) : null;
    return {
      models,
      me,
      secret
    };
  }
});

const app = express();
server.applyMiddleware({ app });

app.use(bodyParser.json());

app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => next(new Error('404 Not found')));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error page
  res.status(err.status || 500);
  res.send('error');
});

const port = process.env.PORT || 5000;

models.sequelize
  .sync({})
  .then(() =>
    app.listen(port, () =>
      console.log(`============= Server running on port ${port} =============`)
    )
  );
