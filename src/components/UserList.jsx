import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.Name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList

