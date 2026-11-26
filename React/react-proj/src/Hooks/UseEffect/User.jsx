import { useEffect, useState } from 'react'

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    //   console.log("component is rendering");
    fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => console.log(response))
      .then(response => response.json())
    //   .then(data => console.log(data))
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <h2>Display User</h2>
      <table border={2}>
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>email</th>
            <th>website</th>
            </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default User
