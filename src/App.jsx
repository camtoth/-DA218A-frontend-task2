import { useEffect } from 'react';
import { useStates } from './utilities/states';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Screenings from './Screenings';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  const s = useStates('main', {
    movies: [],
    screenings: []
  });

  useEffect(() => {
    (async () => {
      s.movies = await (await fetch('/api/movies')).json();
      s.screenings = await (await fetch('/api/screenings')).json();
    })();
  }, []);

  return s.movies.length === 0 ? null : <>
    <Routes>
      <Route path="/movies" element={<MovieList />}></Route>
      <Route path="/movie-detail/:id" element={<MovieDetail />} />
      <Route path="/" element={<Screenings />}></Route>
    </Routes>
  </>;
}