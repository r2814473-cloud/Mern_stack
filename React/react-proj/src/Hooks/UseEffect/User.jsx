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
      <table className="border-collapse border border-black">
        <thead>
            <tr>
            <th className="border border-black px-2 py-1">Id</th>
            <th className="border border-black px-2 py-1">Name</th>
            <th className="border border-black px-2 py-1">Username</th>
            <th className="border border-black px-2 py-1">email</th>
            <th className="border border-black px-2 py-1">website</th>
            </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border border-black px-2 py-1">{user.id}</td>
              <td className="border border-black px-2 py-1">{user.name}</td>
              <td className="border border-black px-2 py-1">{user.username}</td>
              <td className="border border-black px-2 py-1">{user.email}</td>
              <td className="border border-black px-2 py-1">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default User
