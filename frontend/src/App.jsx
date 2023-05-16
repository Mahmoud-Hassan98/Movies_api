import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css'
function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (selectedGenre === '') {
      setFilteredMovies(movies);
    } else {
      fetchMoviesByGenre(selectedGenre);
    }
  }, [selectedGenre]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/movies');
      const moviesData = response.data;
      setMovies(moviesData);
      setFilteredMovies(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMoviesByGenre = async (genreId) => {
    try {
      const response = await axios.get(`http://localhost:5000/movies/genre/${genreId}`);
      const moviesData = response.data;
      setFilteredMovies(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

const handleSearch = (query) => {
  const filtered = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) &&
      (selectedGenre === '' || movie.genre_ids.includes(parseInt(selectedGenre)))
  );
  setFilteredMovies(filtered);
};


  return (

    <>
             <br/><br/><br/><br/>



             <div className="container">
             <div className="genre-filter">
             <select
               value={selectedGenre}
               onChange={(e) => setSelectedGenre(e.target.value)}
               className="genre-select"
             >
               <option value="">All Genres</option>
               <option value="28">Action</option>
               <option value="35">Comedy</option>
               <option value="18">Drama</option>
               {/* Add more genre options as needed */}
             </select>
           </div>
             <div className="search-bar">
               <input
                 type="text"
                 value={searchQuery}
                 onChange={(e) => {
                   setSearchQuery(e.target.value);
                   handleSearch(e.target.value);
                 }}
                 placeholder="Search movies by title"
                 className="search-input"
               />
             </div> 
             </div> 

           <br/><br/>
    <div className="wrapper">
    {filteredMovies.map((movie) => (      <div className="card" style={{ width: "18rem" }} key={movie.id}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}


          alt={movie.title}
        />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 metadata">
                <i className="fa fa-star" aria-hidden="true" />
                <p>{movie.rating}/10</p>
              </div>
              <div className="col-sm-8 metadata">{movie.genre}</div>
            </div>
          </div>
          <p className="card-text">{movie.overview}</p>
          <a
            className="trailer-preview"
            href={movie.trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-play" aria-hidden="true" />
          </a>
        </div>
      </div>


      
    ))}
  </div>
  
  
</>
    
  );
}

export default App;