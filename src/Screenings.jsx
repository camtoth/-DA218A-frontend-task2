import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';


export default function Screenings() {

  const s = useStates('main');

  return <>
    {s.screenings.map(({ id, time, movieId, auditoriumId }) => <Link
      to={'/movie-detail/' + movieId}>
        <Movie screeningId = {id} time = {time} movieId = {movieId} auditoriumId = {auditoriumId} />
    </Link>
    )}
  </>;

}