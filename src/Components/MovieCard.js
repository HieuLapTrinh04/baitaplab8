
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
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.poster} alt={movie.title} style={styles.poster} />
      <h3 style={styles.title}>{movie.title}</h3>
      <p style={styles.genre}>{movie.genre}</p>
      <button style={styles.button}>Đặt Vé</button>
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
    width: '220px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '15px',
    textAlign: 'center',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  poster: {
    width: '100%',
    borderRadius: '6px',
    marginBottom: '12px',
    objectFit: 'cover',
    height: '320px',
  },
  title: {
    fontSize: '18px',
    margin: '0 0 6px 0',
    color: '#222',
  },
  genre: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '12px',
  },
  button: {
    backgroundColor: '#e50914',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: '600',
  }
};

export default MovieCard;

