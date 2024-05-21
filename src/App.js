import './App.css';
import {useState} from 'react';
import homeMovies from './movies.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <nav>
      <h1>Assignment 1</h1>

      <button onClick={() => setLoggedIn(!LoggedIn)}>
        {LoggedIn ? 'Logout' : 'Login'}
      </button>

      <p>/\/\/\This button is bootstrap</p>

      <MovieList movies={homeMovies.movies}></MovieList>


    </nav>
  );
};


const MovieList = ({ movies }) => {
  return (
    <>
    <h2>Movies:</h2>
      {movies.map((movie, index) => (
        <Movie key={index} info={movie} />
      ))}
    </>
  );
};

function Movie({info}) {
  return (
  <>
    <h3>{info.name}</h3>
    <p>Year: {info.year}</p>
    <p>Rating: {info.rating}</p>
    <br></br>
  </>
  );
}

export default NavBar;
