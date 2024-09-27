import React from 'react';
import { useParams } from 'react-router-dom';

const Userdetail = ({ users }) => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }
  return (
    <div>

      <h1>User Detail</h1>
      <p><strong>Name: </strong>{user.Name}</p>
      <p><strong>Username: </strong>{user.Username}</p>
      <p><strong>Email: </strong>{user.Email}</p>
      <p><strong>Phone: </strong>{user.Phone}</p>
      <p><strong>Website: </strong>{user.Website}</p>
    </div>
  )
}

export default Userdetail
