import React from 'react';
import './style.css';

function TableRow(props) {
  return (
    <tr>
      <td>
        <img
          className='img-thumbnail col-4'
          src={props.user.picture.thumbnail}
          alt='user image'
        />{' '}
      </td>
      <td>{props.user.name.first}</td>
      <td>{props.user.name.last}</td>
      <td>{props.user.email}</td>
    </tr>
  );
}

export default TableRow;



