import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import BookContainer from './components/bookContaier';

axios.defaults.baseURL = 'http://localhost:3000';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/')
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <div className="App">
        <BookContainer books={books} />
    </div>
      <div>
        <h1>Book Search</h1>
        res
      </div>
    </>
  );

}

export default App;
