import { useParams } from 'react-router-dom';
import { useStates } from './utilities/states';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';

export default function Movie(props) {

  // read the shared state/context main
  // that was set in App and contains the movie list
  const s = useStates('main');

  // find our movie and deconstruct properties from it to variables
  const movie = s.movies.find(movie => movie.id == props.movieId);
  const { title, description } = movie;
  const { length, categories, posterImage } = description;

  const time = new Date(props.time);
  var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  let timeToRender = time.toLocaleTimeString('en-us', options); 


  return <Container>
            <Row>
                <div className="screening">
                <h3>{title}</h3>
                <h5>{length} minutes</h5>
                <img src={'https://cinema-rest.nodehill.se' + posterImage} />
                <p> {timeToRender} </p>
                <hr />
                </div>
            </Row>
        </Container>
}