import React from 'react';
import './style.css';
import TableRow from '../TableRow';

function Table(props) {
  return (
    <div className='row'>
      <table className='table align-middle'>
        <thead>
          <tr key={1}>
            <th scope='col-4'>Image</th>
            <th scope='col-2'>First Name</th>
            <th scope='col-2'>Last Name</th>
            <th scope='col-3'>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <TableRow 
              user={user}
              key={user.login.uuid} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
