import React, { useState } from 'react'
import './App.css';

function App() {

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [books,setBooks] = useState(null);

  const fetchApi =()=>{
    fetch(apiURL).then( res => res.json()).then( data => {
      console.log(data)
      setBooks(data)});
  }

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchApi}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {books &&
          books.map((book, index) => {

            const authors = book.authors.join(", ");
            const newDate = new Date(book.released).toDateString();
            return(
            <div className="book" key={index}>
              <h3>Book {index + 1}</h3>
              <h2>{book.name}</h2>

              <div className="details">
                <p>👨: {authors}</p>
                <p>📖: {book.numberOfPages}</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {newDate}</p>
              </div>
            </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
