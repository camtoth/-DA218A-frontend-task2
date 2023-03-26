import { useStates } from './utilities/states';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';

export default function Filter(props) {

  // read the shared state/context main
  // that was set in App and contains the movie list
  const s = useStates('main');

  const handleChange = (e) => {
    let category = e.target.value;
    if(category == 0) {
        props.setSortedScreenings(s.screenings);
    }
    let selectedMovies = [];
    s.moviesXCategories.forEach(movie => {
        if(movie.Id === category) {
            selectedMovies.push(s.movies.find(m => movie.title == m.title));
        }
    })
    let selectedScreenings = [];
    s.screenings.forEach(screening => {

    })
  }

  return <Container>

                <Form.Select onChange={e => {handleChange(e); props.setSelectedCategory(e.target.value)}}>
                    <option value = '0'> All </option>
                    {s.categories.map((category) => 
                        <option value = {category.id}> {category.title}</option>
                    )}

                </Form.Select>
        </Container>
}