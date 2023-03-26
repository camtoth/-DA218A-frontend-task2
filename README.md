# -DA218A-frontend-task2

A small react project for HKR DA218A Front-end Development Course

## Components
* App.jsx: fetches data from API, creates routes
* Screenings: creates state for sorted screenings and currently selected category, renders the Filter component (passing those two states) and loops through the list of (sorted) screenings to render a Movie component for each of them
* Filter: renders a dropdown select menu with all the categories. If the user selects a category, it filters for that category and updates the `sortedScreenings` state array accordingly.
* Movie: renders a movie card with correctly formatted date and time, title, length and movie poster.
* MovieDetail: route rendered when a Movie is clicked on, shows info about the movie (length, category, poster)