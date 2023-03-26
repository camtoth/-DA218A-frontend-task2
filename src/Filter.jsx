import { useStates } from './utilities/states';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';

export default function Filter(props) {

  // read the shared state/context main
  // that was set in App and contains the movie list
  const s = useStates('main');

  const handleChange = () => {
    props.setSortedScreenings(s.screenings);
  }

  return <Container>

                <Form.Select onChange={handleChange()}>
                    <option value = 'all'>All categories</option>
                    <option value = 'action'>Action</option>
                    <option value = 'adventure'>adventure</option>
                    <option value = 'biography'>biography</option>
                    <option value = 'comedy'>Comedy</option>
                    <option value = 'crime'>Crime</option>
                    <option value = 'family'>Family</option>
                    <option value = 'fantasy'>Fantasy</option>
                    <option value = 'horror'>Horror</option>
                    <option value = 'music'>Music</option>
                    <option value = 'romance'>Romance</option>
                    <option value = 'scifi'>Sci-Fi</option>
                    <option value = 'other'>Other</option>

                </Form.Select>
        </Container>
}