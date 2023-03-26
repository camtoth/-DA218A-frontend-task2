import { useStates } from './utilities/states';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function MovieList() {

  const s = useStates('main');

  return <>
    {s.movies.map(({ id, title, description: d }) => <Link
      to={'/movie-detail/' + id}>
      <Container>
        <Row>
          <div className="movie">
            <h3>{title}</h3>
            <img src={'https://cinema-rest.nodehill.se' + d.posterImage} />
            <p>Length {d.length}</p>
            <hr />
          </div>
        </Row>
      </Container>
        
    </Link>
    )}
  </>;

}