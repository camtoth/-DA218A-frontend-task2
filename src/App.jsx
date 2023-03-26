import { useEffect } from 'react';
import { useState } from 'react';
import { useStates } from './utilities/states';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Screenings from './Screenings';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  const s = useStates('main', {
    movies: [],
    screenings: [],
    moviesByCategory: [],
    categories: []
  });

  useEffect(() => {
    (async () => {
      s.movies = await (await fetch('/api/movies')).json();
      s.screenings = await (await fetch('/api/screenings/?sort=time')).json();
      s.moviesXCategories = await (await fetch('/api/moviesXcategories')).json();
      s.categories = await (await fetch('/api/categories')).json();
    })();
  }, []);
      

  return s.movies.length === 0 ? null : <>
    <Routes>
      <Route path="/movies" element={<MovieList />}></Route>
      <Route path="/movie-detail/:id" element={<MovieDetail />} />
      <Route path="/" element={<Screenings screenings = {s.screenings}/>}></Route>
    </Routes>
  </>;
}