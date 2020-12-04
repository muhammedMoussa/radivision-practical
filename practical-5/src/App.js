import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import './App.css';
import { api } from './shared/api';

function App() {
  const getMovies = async () => {
    
    const res = await fetch(`${api.url}/movie/upcoming${api.api_key}`);
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    getMovies();
  }, [])  

  return (
    <div className="">
      <Header />
    </div>
  );
}

export default App;
