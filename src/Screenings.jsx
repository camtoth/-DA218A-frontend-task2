import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Screenings() {

  const s = useStates('main');

  return <>
    {s.screenings.map(({ id, time, movieId, auditoriumId }) => <Link
      to={'/movie-detail/' + movieId}>
      <Container>
        <Row>
          <div className="screening">
            <h3>{s.movies.find(movie => movie.id == movieId).title}</h3>
            <img src={'https://cinema-rest.nodehill.se' + s.movies.find(movie => movie.id == movieId).description.posterImage} />
            <p> {time} </p>
            <hr />
          </div>
        </Row>
      </Container>
        
    </Link>
    )}
  </>;

}