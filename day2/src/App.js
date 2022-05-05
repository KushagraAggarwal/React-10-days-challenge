import React from 'react'
import './App.css';
import users from './users_data'

function App() {
 return (
   <div className="App">
     <div className="page-deets">
       <h2>Loop Over an Array of Data</h2>
     </div>

     {/* Iterate over imported array in userData */}
     <div className="users">
       display data here
        {users.map(user=>{
          return(
            <div>
              <p>{user.name}</p>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </div>
          )
        })}
     </div>
   </div>
 );
}

export default App;
