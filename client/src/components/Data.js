import React, { useContext } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Typography, Paper, CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import ListSelect from './ListSelect';
import UsersTable from './UsersTable';
import ListTable from './ListTable';
import AllBooksTable from './AllBooksTable';
import { WarningContext } from '../App';

export const GET_BOOKS = gql`
  {
    Books {
      id
      title
      author
      avgRating
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
  users: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    },
    [theme.breakpoints.down('xs')]: {
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
  const { setWarning } = useContext(WarningContext);

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const classes = useStyles();

  const tableOptions = {
    pageSize: 10,
    pageSizeOptions: [5, 10],
    padding: 'dense',
    actionsColumnIndex: -1,
    grouping: false,
    headerStyle: { backgroundColor: 'lightblue' }
  };

  const columns = [
    { title: 'Title', field: 'title', defaultSort: 'asc' },
    { title: 'Author', field: 'author', cellStyle: { padding: 0 } },
    {
      title: 'Rating',
      field: 'avgRating',
      type: 'numeric',
      editable: 'never',
      cellStyle: { padding: 0 }
    },
    {
      title: 'Read count',
      field: 'readCount',
      type: 'numeric',
      editable: 'never'
    }
  ];

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

        if (error) {
          console.log('DATA COMPONENT ERROR  ====  ' + error.message);
          setWarning({ open: true, msg: error.message, reload: false });
        }

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
            <Paper
              className={
                selectedValue === 'users' ? classes.users : classes.root
              }
            >
              {selectedValue === 'users' && <UsersTable />}
              {selectedValue === 'all' && !user && (
                <MaterialTable
                  className={classes.table}
                  title="All books in database"
                  columns={columns}
                  data={bookArr}
                  options={tableOptions}
                />
              )}
              {selectedValue === 'all' && user && (
                <AllBooksTable
                  user={user}
                  className={classes.table}
                  title="All books in database"
                  columns={columns}
                  data={bookArr}
                  options={tableOptions}
                />
              )}
              {selectedValue === 'list' && (
                <ListTable
                  className={classes.table}
                  title={'Your reading list'}
                  columns={columns}
                  data={bookArr}
                  options={tableOptions}
                />
              )}
            </Paper>
          </>
        );
      }}
    </Query>
  );
};
