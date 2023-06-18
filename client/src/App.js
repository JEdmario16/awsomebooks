import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import BookContainer from './components/bookContaier';
import { Button } from 'react-bootstrap';


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
      <div className="App">
        <Button variant="primary" href="/addBook">Add Book</Button>
      </div>
    </>
  );

}

export default App;
