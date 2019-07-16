import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Warning from './Warning';

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

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
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

export default () => {
  const classes = useStyles();

  return (
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
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

        return (
          <>
            <Typography
              className={classes.title}
              variant="h3"
              align="center"
              gutterBottom
            >
              All books in database
            </Typography>
            <Paper className={classes.root}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.cell}>Title</TableCell>
                    <TableCell className={classes.cell}>Author</TableCell>
                    <TableCell align="center" className={classes.cell}>
                      Rating
                    </TableCell>
                    <TableCell align="center" className={classes.cell}>
                      Read Count
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.Books.map(book => {
                    const { id, title, author, rating, readCount } = book;
                    return (
                      <TableRow key={id}>
                        <TableCell
                          component="th"
                          scope="row"
                          className={classes.cell}
                        >
                          {title}
                        </TableCell>
                        <TableCell className={classes.cell}>{author}</TableCell>
                        <TableCell align="center" className={classes.cell}>
                          {averageRating(rating)}
                        </TableCell>
                        <TableCell align="center" className={classes.cell}>
                          {readCount}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </>
        );
      }}
    </Query>
  );
};
