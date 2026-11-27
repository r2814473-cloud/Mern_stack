import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Home1 from './Pages/Home1'
import Counter from './Hooks/useState/Counter'
import Score from './Hooks/useState/Score'
import Flipkart from './Components/Flipkart'
import { MobileContext } from './Components/MobileContext'
import User from './Hooks/UseEffect/User'
import Fetch_api from './Components/Fetch_api'
import Registration from './Components/Registration'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
function Complex(data)
{
  // console.log(data)
  data.obj2.map((Complx)=>{
        console.log(Complx);//if you ONLY want to use console.log() without showing on screen?
      })
  return(
    <>
    <h2>List Of ComplexData</h2>
    <h2>First Player: {data.obj2[0].name}</h2>
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', margin: '15px 0' ,alignSelf:'center'}}>
      {
        data.obj2.map((Complx, index) => {
          return (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px 25px',
                backgroundColor: '#7663c5',
                color: '#222',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                minWidth: '160px'
              }}
            >
              <h3 style={{ margin: '0 0 8px 0' }}>{Complx.name}</h3>
              <p style={{ margin: 0, color: '#555', fontWeight: 'bold' }}>
                Team: {Complx.Team}
              </p>
            </div>
          );
        })
      }
    </div>
    
   
    </>
  )
}

function Players(prop)
{
  return(
    <>
    <h2>List Of Players</h2>
    <h2>id: {prop.obj1.id}</h2>
    <h2>Player: {prop.obj1.name}</h2>
    <h2>Team: {prop.obj1.Team}</h2>
    <h2>company: {prop.obj1.company[0]}</h2>
    </>
  )
}
function Data(prop)
{
  console.log(prop.obj)
  return(
    <>
    <h3>data component</h3>
    <h2>College Name : {prop.obj}</h2>
    </>
  )
}
function App()
{
  const mobiles="Iphone 19 pro max";
  let players_data={
    id:100,
    name:'kohli',
    Team:"India",
    company:["TCS","wipro","Amazon","Flipkart"]
  }

  let complex_data=[
    {
      name:'kohli',
      Team:"India"
    },
    {
      name:'Rohit',
      Team:"India"
    },
    {
      name:'AB Devilliers',
      Team:"South Africa"
    }
  ]
  return (
    <>
    <h1> "This is  App Component"</h1>
    <h2>js file</h2>
    <Home />
    <Data obj="SeCe college"/>
    {/* only we can modify data in parent  */}
    <Players obj1={players_data}/>
    <Complex obj2={complex_data}/>
    <Counter />
    <Score />
    {/* <Flipkart mobile={mobiles}/> Deconstructing method*/}
   
    <MobileContext.Provider value={mobiles}>
      <Flipkart/>
    </MobileContext.Provider>
     <User/>
      <Fetch_api/>
      <Registration/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home1/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes></BrowserRouter>
   </>
   )
}


export default App


// only using the callback function to we pass data from child to parent


//  to avoid the prop drilling we need to use the usecontexthook
//     ( prop Drilling 
//     use context) instead of pass the data from parent to last child by passing the data for all the intermediate child class to last child,we can pass the data directly from parent to last child using prop drilling concept
    

