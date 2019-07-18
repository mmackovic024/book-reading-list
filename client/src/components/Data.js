import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Typography, Paper, CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import Warning from './Warning';
import ListSelect from './ListSelect';

const GET_BOOKS = gql`
  {
    Books {
      id
      title
      author
      rating
      readCount
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    height: '90%',
    margin: '2rem auto',
    overflowX: 'auto',
    overflowY: 'auto'
  },
  title: { marginTop: '0.5rem' },
  table: {
    minWidth: 650
  },
  cell: { fontSize: '0.95rem' }
}));

// =================================================================
export default ({ user }) => {
  const [selectedValue, setSelectedValue] = React.useState('all');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
        let bookArr = data.Books && [...data.Books];
        if (user) {
          bookArr =
            selectedValue === 'all'
              ? data.Books && [...data.Books]
              : user.books && [...user.books];
        }

        if (loading)
          return (
            <CircularProgress
              disableShrink
              size={50}
              thickness={3}
              variant="indeterminate"
              style={{
                position: 'relative',
                left: '50%',
                marginTop: '5rem'
              }}
            />
          );
        if (error) return <Warning message={error.message} />;

        const averageRating = rating =>
          (rating.reduce((acc, curr) => acc + curr) / rating.length).toFixed(1);

        if (typeof bookArr[0].rating === 'array')
          return bookArr.forEach(
            book => (book.rating = averageRating(book.rating))
          );

        return (
          <>
            {!user && (
              <Typography
                className={classes.title}
                variant="body1"
                align="center"
                gutterBottom
              >
                You can sign in with username: test and password: test
              </Typography>
            )}
            {user && (
              <ListSelect
                selectedValue={selectedValue}
                handleChange={handleChange}
              />
            )}
            <Paper className={classes.root}>
              {selectedValue === 'all' && (
                <MaterialTable
                  className={classes.table}
                  title="All books in database"
                  columns={[
                    { title: 'Title', field: 'title', defaultSort: 'asc' },
                    { title: 'Author', field: 'author' },
                    { title: 'Rating', field: 'rating', type: 'numeric' },
                    { title: 'Read count', field: 'readCount', type: 'numeric' }
                  ]}
                  data={bookArr}
                  options={{
                    pageSize: 10,
                    pageSizeOptions: [5, 10],
                    padding: 'dense'
                  }}
                />
              )}
              {selectedValue === 'list' && (
                <MaterialTable
                  className={classes.table}
                  title={'Your reading list'}
                  columns={[
                    { title: 'Title', field: 'title', defaultSort: 'asc' },
                    { title: 'Author', field: 'author' },
                    { title: 'Rating', field: 'rating', type: 'numeric' },
                    { title: 'Read count', field: 'readCount', type: 'numeric' }
                  ]}
                  data={bookArr}
                  options={{
                    pageSize: 10,
                    pageSizeOptions: [5, 10],
                    padding: 'dense'
                  }}
                />
              )}
              {/* {user &&
                    bookArr.map(book => {
                      const { id, title, author, rating, readCount } = book;
                      return (
                        <TableRow key={id}>
                          <TableCell className={classes.cell}>
                            {title}
                          </TableCell>
                          <TableCell className={classes.cell}>
                            {author}
                          </TableCell>
                          <TableCell align="center" className={classes.cell}>
                            {averageRating(rating)}
                          </TableCell>
                          <TableCell align="center" className={classes.cell}>
                            {readCount}
                          </TableCell>
                        </TableRow>
                      );
                    })} */}
            </Paper>
          </>
        );
      }}
    </Query>
  );
};
