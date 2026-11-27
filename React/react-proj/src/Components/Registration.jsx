import { useState } from 'react'

function Registration() {
    const[formdata,setformdata]=useState({
        username:'',
        useremail:'',
        usernumber:''
    })
    const[users,setusers]=useState([]);
    
    function handlechange(e){
        setformdata({
            ...formdata,
            [e.target.name] : e.target.value
    })
    }
    function handlesubmit(e)
    {
      e.preventDefault()
      setusers([...users, formdata])
      setformdata({
        username:'',
        useremail:'',
        usernumber:''
      })
    }
    function deletedata(index)
    {
      const updateUsers=[]


      for(let i=0;i<users.length;i++)
      {
        if(i!=index)
        {
            updateUsers.push(users[i])
        }
      }

      setusers(updateUsers);
    }
    function handleEdit(index)
    {
        const user=users[index];
        setformdata(user);

        for(let i = 0;i<users.length ; i++)
        {
            if(i==index)
            {
                users[i]=formdata;
            }
        }
        setusers(users);
    }
    
  return (
    <div>
        <h2>Registration Form</h2>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" 
            name='username' 
            value={formdata.username}
            onChange={handlechange}
            placeholder='Enter username'/>
            <br/>
            <input type="email"
            name='useremail'
            value={formdata.useremail}
            onChange={handlechange}
            placeholder='Enter email'/>
            <br/>
            <input type="number"
            name='usernumber'
            value={formdata.usernumber}
            onChange={handlechange}
            placeholder='Enter number'/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        <table className="border-collapse border border-black">
            <thead>
                <tr>
                    <th className="border border-black px-2 py-1">Username</th>
                    <th className="border border-black px-2 py-1">Email</th>
                    <th className="border border-black px-2 py-1">Number</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td className="border border-black px-2 py-1">{user.username}</td>
                        <td className="border border-black px-2 py-1">{user.useremail}</td>
                        <td className="border border-black px-2 py-1">{user.usernumber}</td>
                        <button onClick={()=>deletedata(index)}>delete</button>
                        <button onClick={()=>handleEdit(index)}>edit</button>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Registration;