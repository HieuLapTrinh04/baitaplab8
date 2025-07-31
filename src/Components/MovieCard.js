// src/components/MovieDetailCard.jsx
import React from 'react';

const MovieDetailCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterUrl} alt={movie.title} style={styles.image} />
      <div style={styles.info}>
        <h2>{movie.title}</h2>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Release Date:</strong> {movie.releaseDate}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '300px',
    objectFit: 'cover',
  },
  info: {
    padding: '20px',
  },
};

export default MovieDetailCard;
