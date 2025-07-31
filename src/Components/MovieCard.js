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

