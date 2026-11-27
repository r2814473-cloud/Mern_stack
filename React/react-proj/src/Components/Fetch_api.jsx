import React, { useEffect, useState } from 'react'

function Fetch_api() {
    const [userdata,setuserdata]=useState([])
    // console.log(userdata);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
           .then(response => {
          console.log(response)
          return response
        })
        .then(response=>response.json())
        // .then(data=>console.log(data.users))
        .then(data=>setuserdata(data.users))
    },[])
  return (
    <>
    <h2>Fetch_Api</h2>
    <table className="border-collapse border border-black">
        <thead>
            <tr>
                <th className="border border-black px-2 py-1">firstName</th>
                <th className="border border-black px-2 py-1">lastName</th>
                <th className="border border-black px-2 py-1">maidenName</th>
            </tr>
        </thead>
        <tbody>
            {userdata.map(user=>(
                <tr key={user.firstName}>
                    <td className="border border-black px-2 py-1">{user.firstName}</td>
                    <td className="border border-black px-2 py-1">{user.lastName}</td>
                    <td className="border border-black px-2 py-1">{user.maidenName}</td>
                </tr>
            ))}
    
        </tbody>
    </table>

    </>
     )
}

export default Fetch_api