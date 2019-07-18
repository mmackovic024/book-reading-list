import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { CircularProgress } from '@material-ui/core';
import MaterialTable from 'material-table';
import Warning from './Warning';

const GET_USERS = gql`
  {
    Users {
      id
      username
      bookCount
    }
  }
`;

// =================================================================
export default () => {
  const tableOptions = {
    pageSize: 10,
    pageSizeOptions: [5, 10],
    padding: 'dense',
    search: false
  };

  return (
    <Query query={GET_USERS}>
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

        return (
          <>
            {data.Users && (
              <MaterialTable
                style={{ minWidth: 650 }}
                title="All registered users"
                columns={[
                  { title: 'Username', field: 'username', defaultSort: 'asc' },
                  { title: 'Book count', field: 'bookCount', type: 'numeric' }
                ]}
                data={data.Users}
                options={tableOptions}
              />
            )}
          </>
        );
      }}
    </Query>
  );
};
