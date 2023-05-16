const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000; // You can change this to any desired port number

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Endpoint for fetching movies
app.get('/movies', async (req, res) => {
  try {
    // Make a request to the movie API to get all movies
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=f7c60082eff916bf6b71057813e68f3c'
    );

    const movies = response.data.results;
    res.set('Access-Control-Allow-Origin', 'http://localhost:5174');
    res.status(202).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint for fetching movies by genre
app.get('/movies/genre/:genreId', async (req, res) => {
  try {
    const genreId = req.params.genreId;

    // Make a request to the movie API to get movies by genre
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=f7c60082eff916bf6b71057813e68f3c&with_genres=${genreId}`
    );

    const movies = response.data.results;
    res.set('Access-Control-Allow-Origin', 'http://localhost:5174');
    res.status(202).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
