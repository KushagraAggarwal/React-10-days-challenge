import React from 'react'
import './App.css';


const user= {
  name: 'Kushagra Aggarwal',
  location: 'food type',
  foodytype: 'Everything',
  age: '24',
  likes:'Listening music'
}

function App() {
  
  return (
    <div className="App">
      <div className='container'>
        <div className="user-deets">
          <h1>{user.name}</h1>
          <p>
            <strong>Profile Picture</strong>
            <br />
            <img src="/assets/0001.jpg" />
          </p>
          <p>
            <strong>Location</strong>
            <br />
            {user.location}
          </p>

          <p>
            <strong>Eats</strong>
            <br />
            {user.foodytype}
          </p>

          <p>
            <strong>Age</strong>
            <br />
            {user.age}
          </p>

          <p>
            <strong>Likes</strong>
            <br />
            {user.likes}
          </p>

          <p>
            <strong></strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
