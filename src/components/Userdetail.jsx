import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Userdetail = ({ users }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = users.find(u => u.id === parseInt(id));
    setUser(foundUser);
  }, [id, users]);

  if (!user) {
    return <div>Loading...</div>;
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