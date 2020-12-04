import { useState, useEffect } from 'react';
import Header from './components/Header';

import { api } from './shared/api';
import Slider from './components/Slider';

function App() {
  const [movies, setmovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch(`${api.url}/movie/upcoming${api.api_key}`);
      const data = await res.json();
      setmovies(data.results.slice(0, 10));
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])  

  return (
    <div>
      <Header />
      <Slider items={movies}/>
    </div>
  );
}

export default App;
