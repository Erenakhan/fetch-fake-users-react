import React, { useState } from 'react'
import { useEffect } from 'react'
import Show from './Show'
import '../App.css';
/* https://jsonplaceholder.typicode.com/users */

function Api() {
  const [api ,setApi] = useState([])
    useEffect(()=>{
      fetch('https://randomuser.me/api/?results=5')
      .then(Response=>Response.json())
      .then(Response=>setApi(Response.results))
    },[])

    

    


     
   
  return (
    <div className='conteiner'>
        <h1>Fake People</h1>
    <ul>
        {api.map((user,i)=>
          <li className='user'>  <img src={user.picture.large}  alt="" />  <br></br>Name:  {user.name.first}<br></br>Surname:  {user.name.last}<br></br>Country: {user.location.country}<br></br>Age: {user.dob.age}
        </li>
        )}
        </ul>
    </div>
  )

}

export default Api