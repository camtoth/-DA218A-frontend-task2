import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';
import Filter from './Filter';
import { useEffect } from 'react';
import { useState } from 'react';



export default function Screenings() {

  const s = useStates('main');
  const [sortedScreenings, setSortedScreenings] = useState(s.screenings);
  const [selectedCategory, setSelectedCategory]  = useState(0);

  return <>
    <Filter selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} setSortedScreenings = {setSortedScreenings}/>
    {sortedScreenings.map(({ id, time, movieId, auditoriumId }) => <Link
      to={'/movie-detail/' + movieId}>
        <Movie screeningId = {id} time = {time} movieId = {movieId} auditoriumId = {auditoriumId}></Movie>
    </Link>
    )}
  </>;

}